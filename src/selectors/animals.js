/* eslint-disable import/prefer-default-export */
export const getLoggedMessage = (user) =>
  user.infos && `Bienvenue ${user.infos.pseudo}`;

export const getAnimalsUser = (animalId, usersList) =>
  usersList.find((user) => user._id === animalId);

export const getAnimalById = (id, animalsList) =>
  animalsList.find((animal) => id === animal._id);
