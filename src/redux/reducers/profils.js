import {
  SAVE_EDIT_ANIMAL,
  SAVE_EDIT_USER,
  SAVE_EDIT_USER_ASSO,
  CHANGE_FIELD_PROFIL,
  EDIT,
  DEL,
  DEL_CONFIRM,
  SET_PROFIL_PICTURE_PREVIEW,
  SET_PROFIL_PICTURE_NAME,
  SET_ERROR_PROFIL,
} from "src/redux/actions/profils";

export const initialState = {
  edit: false,
  del: false,
  photo: "",
  errors: {},
};

const profils = (state = initialState, action = {}) => {
  switch (action.type) {
    case EDIT:
      return {
        ...state,
        edit: !state.edit,
      };
    case DEL:
      return {
        ...state,
        del: !state.del,
      };
    case SET_PROFIL_PICTURE_PREVIEW: {
      let value = "";
      if (typeof action.photo === "undefined") {
        value = "";
      } else {
        value = URL.createObjectURL(action.photo);
      }
      return {
        ...state,
        photo: value,
        avatar: "",
      };
    }
    case SET_PROFIL_PICTURE_NAME: {
      return {
        ...state,
        photoPath: action.photoPath,
      };
    }
    case CHANGE_FIELD_PROFIL: {
      return {
        ...state,
        [action.id]: action.value,
      };
    }
    case SAVE_EDIT_ANIMAL:
      return {
        ...state,
      };
    case SAVE_EDIT_USER:
      return {
        ...state,
      };
    case SAVE_EDIT_USER_ASSO:
      return {
        ...state,
      };
    case DEL_CONFIRM:
      return {
        ...state,
      };
    case SET_ERROR_PROFIL:
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

export default profils;
