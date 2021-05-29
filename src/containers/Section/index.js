import { connect } from "react-redux";
import Section from "src/components/Section";

const mapStateToProps = (state) => ({
  animalsList: state.lists.animalsList,
  usersList: state.lists.usersList,
  isLoadingUsers: state.lists.isLoadingUsers,
  isLoadingAnimals: state.lists.isLoadingAnimals,
  isErrorUsers: state.lists.isErrorUsers,
  isErrorAnimals: state.lists.isErrorAnimals,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Section);
