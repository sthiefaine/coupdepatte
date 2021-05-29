import { connect } from "react-redux";

import SignUp from "src/components/SignUp";

import {
  changeFieldSignUp,
  signUp,
  selectRole,
  accountValidate,
} from "src/redux/actions/SignUp";

const mapStateToProps = (state) => ({
  email: state.signUp.email,
  password: state.signUp.password,
  passwordVerif: state.signUp.passwordVerif,
  username: state.signUp.username,
  departement: state.signUp.departement,
  valid: state.signUp.valid,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
