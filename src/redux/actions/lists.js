// Action Types
export const GET_USERS_LIST = 'GET_USERS_LIST';
export const SAVE_USERS_LIST = 'SAVE_USERS_LIST';

export const SAVE_ANIMALS_LIST = 'SAVE_ANIMALS_LIST';
export const GET_ANIMALS_LIST = 'GET_ANIMALS_LIST';

export const getUsersList = (isLoadingUsers) => ({
  type: GET_USERS_LIST,
  isLoadingUsers,
});

export const saveUsersList = (usersList) => ({
  type: SAVE_USERS_LIST,
  usersList,
});

export const getAnimalsList = (isLoadingAnimals) => ({
  type: GET_ANIMALS_LIST,
  isLoadingAnimals,
});

export const saveAnimalsList = (animalsList) => ({
  type: SAVE_ANIMALS_LIST,
  animalsList,
});
