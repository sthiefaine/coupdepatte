import { connect } from "react-redux";

import SignUpUsers from "src/components/SignUp/Users";

import {
  changeFieldSignUp,
  signUp,
  selectRole,
  accountValidate,
  setErrorSignUp,
} from "src/redux/actions/SignUp";

import { changePasswordType } from "src/redux/actions/users";

const mapStateToProps = (state) => ({
  email: state.signUp.email,
  password: state.signUp.password,
  passwordVerif: state.signUp.passwordVerif,
  username: state.signUp.username,
  departement: state.signUp.departement,
  valid: state.signUp.valid,
  errors: state.signUp.errors,
  passwordType: state.users.changePasswordType,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldSignUp: (value, id) => {
    console.log("changeFieldSignUp", id);

    dispatch(changeFieldSignUp(value, id));
  },

  signUp: () => {
    console.log("je veux m'inscrire");
    dispatch(signUp());
  },

  selectRole: (role) => {
    dispatch(selectRole(role));
  },

  accountValidate: (value) => {
    dispatch(accountValidate(value));
  },

  setErrorSignUp: (value, id) => {
    dispatch(setErrorSignUp(value, id));
  },

  changePasswordType: (value) => {
    dispatch(changePasswordType(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpUsers);
