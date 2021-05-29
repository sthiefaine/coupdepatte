export const SAVE_ANIMAL = 'SAVE_ANIMAL';
export const SAVE_PICTURE = 'SAVE_PICTURE';
export const SET_ERROR_ANIMAL = 'SET_ERROR_ANIMAL';
export const CHANGE_FIELD_ANIMAL = 'CHANGE_FIELD_ANIMAL';
export const CHANGE_FIELD_PICTURE = 'CHANGE_FIELD_PICTURE';
export const SET_PICTURE_NAME = 'SET_PICTURE_NAME';
export const SET_PICTURE_PREVIEW = 'SET_PICTURE_PREVIEW';
export const CLEAN_ANIMAL_STATE = 'CLEAN_ANIMAL_STATE';

export const cleanAnimalState = () => ({
  type: CLEAN_ANIMAL_STATE,
});

export const setPictureName = (value) => ({
  type: SET_PICTURE_NAME,
  photoPath: value,
});

export const saveAnimal = () => ({
  type: SAVE_ANIMAL,
});

export const savePicture = (value) => ({
  type: SAVE_PICTURE,
  photo: value,
});

export const setPicturePreview = (value) => ({
  type: SET_PICTURE_PREVIEW,
  photo: value,
});

export const setErrorAnimal = (id, value) => ({
  type: SET_ERROR_ANIMAL,
  id,
  value,
});

export const changeFieldAnimal = (value, id) => ({
  type: CHANGE_FIELD_ANIMAL,
  value,
  id,
});

export const changeFieldPicture = (value) => ({
  type: CHANGE_FIELD_PICTURE,
  photo: value,
});
