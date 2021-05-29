import { SET_ERROR, CLEAN_ERROR } from "src/redux/actions";

export const initialState = {
  errors: {},
};

const errors = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.id]: action.value,
        },
      };
    case CLEAN_ERROR:
      return {
        errors: {},
      };
    default:
      return state;
  }
};

export default errors;
