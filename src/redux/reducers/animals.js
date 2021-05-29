import {
  CHANGE_FIELD_ANIMAL,
  SAVE_ANIMAL,
  SET_PICTURE_PREVIEW,
  CHANGE_FIELD_PICTURE,
  SET_PICTURE_NAME,
  SET_ERROR_ANIMAL,
  CLEAN_ANIMAL_STATE,
} from "src/redux/actions/animals";

export const initialState = {
  name: "",

  gender: "",

  breed: "",
  color: "",
  fur: "",
  age: "",
  size: "",
  care_type: "",
  treatments: "",
  compatibility: "",
  description: "",
  ageType: "mois",
  placed: false,
  photo: "",
  errors: {},
};

const animals = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLEAN_ANIMAL_STATE:
      return {
        ...initialState,
      };
    case SET_ERROR_ANIMAL:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.id]: action.value,
        },
      };
    case SET_PICTURE_PREVIEW: {
      let value = "";
      console.log("action.photo", action.photo);
      if (typeof action.photo === "undefined") {
        value = "";
      } else {
        value = URL.createObjectURL(action.photo);
      }
      return {
        ...state,
        photo: value,
      };
    }
    case SET_PICTURE_NAME: {
      console.log("coucou je passe bien ici");
      return {
        ...state,
        photoPath: action.photoPath,
      };
    }
    case CHANGE_FIELD_PICTURE: {
      console.log("REDUCER PHOTO", action);

      return {
        ...state,
        photo: {
          lastModified: action.photo.lastModified,
          lastModifiedDate: action.photo.lastModifiedDate,
          name: action.photo.name,
          size: action.photo.size,
          type: action.photo.type,
        },
      };
    }
    case SAVE_ANIMAL:
      return {
        ...state,
      };
    case CHANGE_FIELD_ANIMAL:
      return {
        ...state,
        [action.id]: action.value,
      };
    default:
      return state;
  }
};

export default animals;

/* lastModified: action.photo.lastModified,
lastModifiedDate: action.photo.lastModifiedDate,
name: action.photo.name,
size: action.photo.size,
type: action.photo.type, */
