import api from "src/services/api";
import {
  SIGN_UP,
  accountValidate,
  setErrorSignUp,
} from "src/redux/actions/SignUp";

import { getUsersList } from "src/redux/actions/lists";

const SingUp = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGN_UP: {
      console.log("SIGN_UP test");

      const state = store.getState();

      const { email, password, username, departement, role } = state.signUp;

      api
        .post(
          "user/add",
          {
            email,
            password,
            username,
            localisation: { department: departement },
            role,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log("requette SingUp login", response);

          store.dispatch(accountValidate(true));
          store.dispatch(getUsersList());
        })
        .catch((error) => {
          console.log("error", error);
          store.dispatch(
            setErrorSignUp(
              error.response.data.error.id,
              error.response.data.error.message
            )
          );
        });
      // next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};
export default SingUp;
