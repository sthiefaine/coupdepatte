import { connect } from "react-redux";

import Login from "src/components/Login";

import { login, setErrorLogin } from "src/redux/actions/auth";
import { changeField, changePasswordType } from "src/redux/actions/users";

const mapStateToProps = (state) => ({
  email: state.users.email,
  password: state.users.password,
  isLogged: state.auth.isLogged,
  loggedMessage: state.auth.loggedMessage,
  errors: state.auth.errors,
  passwordType: state.users.changePasswordType,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, id) => {
    dispatch(changeField(value, id));
  },

  login: () => {
    dispatch(login());
  },

  setErrorLogin: (value, id) => {
    dispatch(setErrorLogin(value, id));
  },

  changePasswordType: (value) => {
    dispatch(changePasswordType(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
