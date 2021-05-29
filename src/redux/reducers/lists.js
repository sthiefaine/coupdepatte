import {
  SAVE_ANIMALS_LIST,
  SAVE_USERS_LIST,
  GET_USERS_LIST,
  GET_ANIMALS_LIST,
  GET_USERS_LIST_ERROR,
  GET_ANIMALS_LIST_ERROR,
} from "src/redux/actions/lists";

export const initialState = {
  animalsList: [],
  usersList: [],
  isLoadingUsers: false,
  isLoadingAnimals: false,
  isErrorUsers: false,
  isErrorAnimals: false,
};

const lists = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        isLoadingUsers: !state.isLoadingUsers,
        isErrorUsers: false,
      };

    case GET_USERS_LIST_ERROR:
      return {
        ...state,
        isLoadingUsers: false,
        isErrorUsers: true,
      };
    case GET_ANIMALS_LIST:
      return {
        ...state,
        isLoadingAnimals: false,
        isErrorUsers: false,
      };

    case GET_ANIMALS_LIST_ERROR:
      return {
        ...state,
        isLoadingAnimals: false,
        isErrorAnimals: true,
      };

    case SAVE_ANIMALS_LIST:
      return {
        ...state,
        isLoadingAnimals: !state.isLoadingAnimals,
        animalsList: action.animalsList,
      };
    case SAVE_USERS_LIST:
      return {
        ...state,
        isLoadingUsers: !state.isLoadingUsers,
        usersList: action.usersList,
      };
    default:
      return state;
  }
};

export default lists;
