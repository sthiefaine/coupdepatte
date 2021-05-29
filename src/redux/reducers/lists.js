import {
  SAVE_ANIMALS_LIST,
  SAVE_USERS_LIST,
  GET_USERS_LIST,
  GET_ANIMALS_LIST,
} from "src/redux/actions/lists";

export const initialState = {
  animalsList: [],
  usersList: [],
  isLoadingUsers: false,
  isLoadingAnimals: false,
};

const lists = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        isLoadingUsers: !state.isLoadingUsers,
      };
    case GET_ANIMALS_LIST:
      return {
        ...state,
        isLoadingAnimals: !state.isLoadingAnimals,
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
