import api from "src/services/api";
import {
  SAVE_EDIT_ANIMAL,
  SAVE_EDIT_USER,
  SAVE_EDIT_USER_ASSO,
  DEL_CONFIRM,
  DEL_USER_CONFIRM,
  SAVE_PROFIL_PICTURE,
  SAVE_USER_PROFIL_PICTURE,
  edit,
  del,
  setProfilPicturePreview,
  setProfilPictureName,
  saveEditAnimal,
  saveEditUserAsso,
  saveEditUser,
} from "src/redux/actions/profils";

import { redirectToHome } from "src/redux/actions";

import { getAnimalsList, getUsersList } from "src/redux/actions/lists";

import { logout, isLogged } from "src/redux/actions/auth";

const Profils = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_PROFIL_PICTURE: {
      const id = localStorage.getItem("id");
      console.log("SAVE_PICTURE MIDDLEWARE", action.photo);

      const formData = new FormData();
      formData.append("image", action.photo);
      formData.append("id", id);

      api
        .post("cat/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("Middleware PROFIL SAVE_PICTURE response", response.data);

          store.dispatch(setProfilPictureName(response.data));
          store.dispatch(saveEditAnimal());
        })
        .catch((error) => {
          console.log("Une erreur est survenue ici", error);
        });
      break;
    }

    case SAVE_USER_PROFIL_PICTURE: {
      const id = localStorage.getItem("id");
      console.log("SAVE_USER_ PICTURE MIDDLEWARE", action.photo);

      const formData = new FormData();
      formData.append("image", action.photo);
      formData.append("id", id);

      const state = store.getState();

      const { role } = state.profils;

      api
        .post("user/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(
            "§§§§§§§§§ Middleware PROFIL SAVE_PICTURE response",
            response.data
          );

          store.dispatch(setProfilPictureName(response.data));

          if (role === "foster") {
            console.log(",kfgpk,nfgniokhti,pnkfhgnklngfkpm,");
            store.dispatch(saveEditUser());
          } else if (role === "association") {
            console.log("zrtrdtzertddrtdqyrzffrzesrfytdfrg");
            store.dispatch(saveEditUserAsso());
          }
        })
        .catch((error) => {
          console.log("Une erreur est survenue ici", error);
        });
      break;
    }

    case SAVE_EDIT_ANIMAL: {
      console.log("SAVE new profil middlewares");
      const state = store.getState();

      const {
        _id,
        user_id,
        name,
        avatar,
        photoPath,
        age,
        ageType,
        gender,
        size,
        care_type,
        treatments,
        compatibility,
        description,
        placed,
        type,
      } = state.profils;
      let newPicture = "";
      if (photoPath) {
        newPicture = photoPath;
      } else {
        newPicture = avatar;
      }

      api
        .put(
          "cat/edit",
          {
            _id,
            user_id,
            name,
            avatar: newPicture,
            age: `${age} ${ageType}`,
            gender,
            size,
            care_type,
            treatments,
            compatibility,
            description,
            placed,
            type,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log("save modif animal", response);

          store.dispatch(edit());
          store.dispatch(getAnimalsList());
        })
        .catch((error) => {
          console.log("error", error);
        });
      // next(action);
      break;
    }

    case SAVE_EDIT_USER_ASSO: {
      console.log("EDIT USER ASSO middlewares");
      const id = localStorage.getItem("id");
      const state = store.getState();

      const {
        _id,
        email,
        username,
        avatar,
        role,
        password,
        photoPath,
        description,
        department,
        phone,
        cats,
        charge,
        equipment,
        localisation,
      } = state.profils;

      let newPicture = "";
      if (photoPath) {
        newPicture = photoPath;
      } else {
        newPicture = avatar;
      }

      let newPassword = "";
      if (password) {
        newPassword = password;
      }

      let newDepartment = "";
      if (department) {
        newDepartment = department;
      } else {
        newDepartment = localisation.department;
      }

      api
        .put(
          "user/edit",
          {
            _id,
            master_id: id,
            avatar: newPicture,
            newPassword,
            cats,
            role,
            email,
            username,
            description,
            localisation: {
              department: newDepartment,
            },
            contact: {
              phone,
            },
            association: {
              charge,
            },
            equipment,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log("save modif user", response);

          store.dispatch(edit());
          store.dispatch(isLogged());
          store.dispatch(getUsersList());
        })
        .catch((error) => {
          console.log("error", error);
        });
      // next(action);
      break;
    }

    case SAVE_EDIT_USER: {
      console.log("EDIT USER middlewares");
      const id = localStorage.getItem("id");
      const state = store.getState();

      const {
        _id,
        email,
        username,
        avatar,
        role,
        password,
        photoPath,
        description,
        department,
        phone,
        equipement,
        diponibility,
        condition,
        wish,
        presence_of,
        localisation,
      } = state.profils;

      let newPicture = "";
      if (photoPath) {
        newPicture = photoPath;
      } else {
        newPicture = avatar;
      }

      let newPassword = "";
      if (password) {
        newPassword = password;
      }

      let newDepartment = "";
      if (department) {
        newDepartment = department;
      } else {
        newDepartment = localisation.department;
      }

      api
        .put(
          "user/edit",
          {
            _id,
            master_id: id,
            avatar: newPicture,
            newPassword,
            role,
            email,
            username,
            description,
            localisation: {
              department: newDepartment,
            },
            contact: {
              phone,
            },
            equipement,
            foster: {
              diponibility,
              condition,
              wish,
              presence_of,
            },
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log("save modif user", response);

          store.dispatch(edit());
          store.dispatch(isLogged());
          store.dispatch(getUsersList());
        })
        .catch((error) => {
          console.log("error", error);
        });
      // next(action);
      break;
    }

    case DEL_CONFIRM: {
      console.log("DEL_CONFIRM");

      const state = store.getState();

      const { id, role } = state.auth.session;

      const { _id, user_id } = state.profils;

      console.log("id cest ", _id);

      api
        .delete(
          "cat/delete",
          {
            data: {
              _id,
              user_id,
            },
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log("requette del animal", response);
          store.dispatch(del());
          store.dispatch(getAnimalsList());
          window.location = `/profil/${role}/${user_id}`;
        })
        .catch((error) => {
          console.log("error", error);
        });
      // next(action);
      break;
    }

    case DEL_USER_CONFIRM: {
      console.log("DEL_CONFIRM");
      const id = localStorage.getItem("id");
      const state = store.getState();

      const { _id } = state.profils;

      console.log("id cest ", _id);

      api
        .delete(
          "user/delete",
          {
            data: {
              _id,
              masterId: id,
            },
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log("requette del user", response);
          store.dispatch(del());
          store.dispatch(getUsersList());
          store.dispatch(getAnimalsList());
          store.dispatch(logout(true));
          store.dispatch(redirectToHome(true));
        })
        .catch((error) => {
          console.log("error", error);
        });
      // next(action);
      break;
    }

    default:
      next(action);
      break;
  }
};
export default Profils;
