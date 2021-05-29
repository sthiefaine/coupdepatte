import { connect } from "react-redux";
import Profils from "src/components/Profils";
import {
  changeFieldProfil,
  edit,
  del,
  delConfirm,
} from "src/redux/actions/profils";

const mapStateToProps = (state) => ({
  animalsList: state.lists.animalsList,
  usersList: state.lists.usersList,
  profilInfosEdit: state.profils,
  editValue: state.profils.edit,
  delValue: state.profils.del,
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

  del: () => {
    console.log("je veux supprimer mes modifications");
    dispatch(del());
  },

  delConfirm: () => {
    console.log("OUI JE VEUX BIEN SUPPRIMER");
    dispatch(delConfirm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profils);
