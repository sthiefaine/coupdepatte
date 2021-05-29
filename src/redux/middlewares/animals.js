import api from "src/services/api";

import {
  SAVE_ANIMAL,
  SAVE_PICTURE,
  setPictureName,
  saveAnimal,
} from "src/redux/actions/animals";

import { getAnimalsList, getUsersList } from "src/redux/actions/lists";

const animals = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_PICTURE: {
      const state = store.getState();
      const { id } = state.auth.session;

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
          console.log("Middleware SAVE_PICTURE response", response.data);

          store.dispatch(setPictureName(response.data));
          store.dispatch(saveAnimal());
        })
        .catch((error) => {
          console.log("Une erreur est survenue", error);
        });
      break;
    }

    case SAVE_ANIMAL: {
      console.log("ADD ANIMAL MIDDLEWARE");
      const state = store.getState();

      const { id, role } = state.auth.session;

      const {
        name,
        gender,
        breed,
        color,
        fur,
        age,
        ageType,
        size,
        care_type,
        treatments,
        compatibility,
        description,
        placed,
        photoPath,
      } = state.animals;
      api
        .post("cat/add", {
          user_id: id,
          name,
          gender,
          type: {
            breed,
            color,
            fur,
          },
          age: `${age} ${ageType}`,
          size,
          care_type,
          treatments,
          compatibility,
          description,
          placed,
          avatar: photoPath,
        })
        .then((response) => {
          console.log("Middleware Animals response", response);

          store.dispatch(getAnimalsList());
          store.dispatch(getUsersList());
          window.location = `/profil/${role}/${id}`;
        })
        .catch((error) => {
          console.log("Une erreur est survenue", error);
        });
      break;
    }
    default:
      next(action);
      break;
  }
};

export default animals;
