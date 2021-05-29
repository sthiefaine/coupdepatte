import { connect } from "react-redux";
import { getAnimalsList, getUsersList } from "src/redux/actions/lists";
import { redirectToHome } from "src/redux/actions";
import { isLogged } from "src/redux/actions/auth";
import App from "src/components/App";

const mapStateToProps = (state) => ({
  asideIsOpen: state.nav.asideIsOpen,
  isLoggedValue: state.auth.isLogged,
  disconnect: state.auth.disconnect,
  isLoading: !!state.lists.isLoadingAnimals && !!state.lists.isLoadingUsers,
  animalsList: state.lists.animalsList,
  usersList: state.lists.usersList,
  redirectToHomeValue: state.nav.redirectToHome,
  session: state.auth.session,
});

const mapDispatchToProps = (dispatch) => ({
  getAnimalsList: () => dispatch(getAnimalsList()),
  getUsersList: () => dispatch(getUsersList()),
  isLogged: () => dispatch(isLogged()),
  redirectToHome: (value) => dispatch(redirectToHome(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
