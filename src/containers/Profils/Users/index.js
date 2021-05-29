import { connect } from "react-redux";

import ProfilUsers from "src/components/Profils/Users";

import {
  changeFieldProfil,
  edit,
  saveEditUser,
  del,
  delUserConfirm,
  setProfilPicturePreview,
  saveUserProfilPicture,
  setErrorProfil,
} from "src/redux/actions/profils";

import { setFavoris, changePasswordType } from "src/redux/actions/users";

const mapStateToProps = (state) => ({
  session: state.auth.session,
  usersList: state.lists.usersList,
  animalsList: state.lists.animalsList,
  editValue: state.profils.edit,
  profilInfosEdit: { ...state.profils },
  delValue: state.profils.del,
  avatar: state.profils.avatar,
  errors: state.profils.errors,
  passwordType: state.users.changePasswordType,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldProfil: (value, id) => {
    console.log("changeFieldProfil", id);

    dispatch(changeFieldProfil(value, id));
  },

  edit: () => {
    console.log("je veux editer un profil");
    dispatch(edit());
  },

  saveEditUser: () => {
    console.log("je veux sauvegarder mes modifications");
    dispatch(saveEditUser());
  },

  del: () => {
    console.log("je veux supprimer mes modifications");
    dispatch(del());
  },

  delUserConfirm: () => {
    console.log("OUI JE VEUX BIEN SUPPRIMER");
    dispatch(delUserConfirm());
  },

  saveUserProfilPicture: (value) => {
    console.log("je veux une photo", value);
    dispatch(saveUserProfilPicture(value));
  },

  setProfilPicturePreview: (value) => {
    dispatch(setProfilPicturePreview(value));
  },

  setErrorProfil: (value, id) => {
    console.log("set errors", id, "-", value);
    dispatch(setErrorProfil(value, id));
  },

  setFavoris: (id, target) => {
    console.log("containers setFavoris", id, target);
    dispatch(setFavoris(id, target));
  },

  changePasswordType: (value) => {
    dispatch(changePasswordType(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilUsers);
