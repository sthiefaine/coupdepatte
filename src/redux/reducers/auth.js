import { SAVE_USER, LOGOUT, SET_ERROR_LOGIN } from "src/redux/actions/auth";

import { SAVE_FAVORIS } from "src/redux/actions/users";

export const initialState = {
  loggedMessage: "Bienvenue !",
  disconnect: false,
  isLogged: false,
  session: {},
  errors: {},
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FAVORIS:
      return {
        ...state,
        session: {
          ...state.session,
          favorites: action.favorites,
        },
      };

    case SAVE_USER:
      return {
        ...state,
        isLogged: action.isLogged,
        session: {
          ...state.session,
          id: action.sessionId,
          username: action.sessionUsername,
          role: action.role,
          avatar: action.avatar,
          favorites: action.favorites,
        },
      };

    case LOGOUT: {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      return {
        ...state,
        isLogged: false,
        session: {},
        disconnect: action.value,
      };
    }
    case SET_ERROR_LOGIN:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.id]: action.value,
        },
      };
    default:
      return state;
  }
};

export default auth;
