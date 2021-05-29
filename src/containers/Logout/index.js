import { connect } from "react-redux";
import Login from "src/components/Login";
import { logout } from "src/redux/actions/auth";
import { changeField } from "src/redux/actions/users";

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, id) => {
    console.log("changeField", id);

    dispatch(changeField(value, id));
  },
  logout: () => {
    console.log("je veux me connecter");
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
