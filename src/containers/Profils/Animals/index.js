import { connect } from "react-redux";

import ProfilAnimals from "src/components/Profils/Animals";

import {
  changeFieldProfil,
  edit,
  saveEditAnimal,
  del,
  delConfirm,
  setProfilPicturePreview,
  saveProfilPicture,
  setErrorProfil,
} from "src/redux/actions/profils";

import { setFavoris } from "src/redux/actions/users";

const mapStateToProps = (state) => ({
  session: state.auth.session,
  usersList: state.lists.usersList,
  animalsList: state.lists.animalsList,
  editValue: state.profils.edit,
  profilInfosEdit: { ...state.profils },
  delValue: state.profils.del,
  avatar: state.profils.avatar,
  errors: state.profils.errors,
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

  saveEditAnimal: () => {
    console.log("je veux sauvegarder mes modifications");
    dispatch(saveEditAnimal());
  },

  del: () => {
    console.log("je veux supprimer mes modifications");
    dispatch(del());
  },

  delConfirm: () => {
    console.log("OUI JE VEUX BIEN SUPPRIMER");
    dispatch(delConfirm());
  },

  saveProfilPicture: (value) => {
    console.log("je veux une photo", value);
    dispatch(saveProfilPicture(value));
  },

  setProfilPicturePreview: (value) => {
    dispatch(setProfilPicturePreview(value));
  },

  setErrorProfil: (value, id) => {
    dispatch(setErrorProfil(value, id));
  },

  setFavoris: (id, target) => {
    console.log("containers setFavoris", id, target);

    dispatch(setFavoris(id, target));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilAnimals);
