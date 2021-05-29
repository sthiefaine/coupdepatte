import {
  CHANGE_FIELD_SIGN_UP,
  SIGN_UP,
  SELECT_ROLE,
  ACCOUNT_VALIDATE,
  SET_ERROR_SIGN_UP,
} from "src/redux/actions/SignUp";

export const initialState = {
  email: "",
  password: "",
  passwordVerif: "",
  username: "",
  departement: "",
  role: "",
  valid: false,
  errors: {},
};

const signUp = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_ROLE:
      return {
        ...state,
        role: action.role,
      };
    case ACCOUNT_VALIDATE:
      return {
        ...state,
        valid: action.valid,
      };
    case CHANGE_FIELD_SIGN_UP:
      return {
        ...state,
        [action.id]: action.value,
      };
    case SIGN_UP:
      return {
        ...state,
      };
    case SET_ERROR_SIGN_UP:
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

export default signUp;
