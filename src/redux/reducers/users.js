import { CHANGE_FIELD, CHANGE_PASSWORD_TYPE } from "src/redux/actions/users";

export const initialState = {
  username: "",
  email: "",
  password: "",
  passwordVerif: "",
  departement: "",
  changePasswordType: false,
};

const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.id]: action.value,
      };
    case CHANGE_PASSWORD_TYPE:
      return {
        ...state,
        changePasswordType: !state.changePasswordType,
      };
    default:
      return {
        ...state,
        changePasswordType: false,
      };
  }
};

export default users;
