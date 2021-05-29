import {
  HANDLE_TOGGLER_CLICK,
  REDIRECT_TO_HOME,
  SCROLL_TO_TOP,
} from "src/redux/actions";

import { LOGOUT } from "src/redux/actions/auth";

const initialState = {
  asideIsOpen: false,
  redirectToHome: false,
  scrollToTop: true,
};

const nav = (state = initialState, action = {}) => {
  switch (action.type) {
    case SCROLL_TO_TOP:
      return {
        ...state,
        scrollToTop: action.scrollToTop,
      };
    case HANDLE_TOGGLER_CLICK:
      return {
        ...state,
        asideIsOpen: !state.asideIsOpen,
      };
    case LOGOUT:
      return {
        ...state,
        asideIsOpen: false,
      };
    case REDIRECT_TO_HOME:
      return {
        ...state,
        redirectToHome: action.redirectToHome,
      };
    default:
      return state;
  }
};

export default nav;
