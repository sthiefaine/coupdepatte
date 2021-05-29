import api from "src/services/api";

import {
  LOGIN,
  saveUser,
  IS_LOGGED,
  setErrorLogin,
} from "src/redux/actions/auth";

import { getUsersList } from "src/redux/actions/lists";

import { redirectToHome } from "src/redux/actions";

// import bcrypt from 'bcryptjs';
// import users from 'src/data/users';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case IS_LOGGED: {
      // console.log('LOGIN test value', email, password);
      console.log("ENVOI DU TOKEN");

      // TODO localStorage GET ID
      const state = store.getState();
      const { id } = state.auth.session;

      const IdToken =
        typeof id === "undefined" ? localStorage.getItem("id") : id;
      api
        .post(
          "user/isLogged",
          {
            token: localStorage.getItem("token"),
            id: IdToken,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          store.dispatch(saveUser({ ...response.data }));

          localStorage.setItem("id", response?.data.session?._id);
        })
        .catch((error) => {
          console.log("error", error.message);
        });

      break;
    }
    case LOGIN: {
      // console.log('LOGIN test');
      const state = store.getState();
      const { email, password } = state.users;
      // console.log('LOGIN test value', email, password);

      api
        .post(
          "user/login",
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.session._id);

          store.dispatch(saveUser({ ...response.data }));
          store.dispatch(getUsersList());
          store.dispatch(redirectToHome(true));
        })
        .catch((error) => {
          store.dispatch(
            setErrorLogin(
              error.response.data.error.id,
              error.response.data.error.message
            )
          );
        });
      break;
    }
    default:
      next(action);
      break;
  }
};
export default auth;
