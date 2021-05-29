// Action Types
export const SAVE_EDIT_ANIMAL = 'SAVE__EDIT_ANIMAL';
export const SAVE_EDIT_USER_ASSO = 'SAVE__EDIT_USER_ASSO';
export const SAVE_EDIT_USER = 'SAVE__EDIT_USER';
export const EDIT = 'EDIT';
export const DEL = 'DEL';
export const DEL_CONFIRM = 'DEL_CONFIRM';
export const DEL_USER_CONFIRM = 'DEL_USER_CONFIRM';
export const CHANGE_FIELD_PROFIL = 'CHANGE_FIELD_PROFIL';
export const SET_PROFIL_PICTURE_PREVIEW = 'SET_PROFIL_PICTURE_PREVIEW';
export const SAVE_PROFIL_PICTURE = 'SAVE_PROFIL_PICTURE';
export const SAVE_USER_PROFIL_PICTURE = 'SAVE_USER_PROFIL_PICTURE';
export const SET_PROFIL_PICTURE_NAME = 'SET_PROFIL_PICTURE_NAME';
export const SET_ERROR_PROFIL = 'SET_ERROR_PROFIL';

export const changeFieldProfil = (value, id) => ({
  type: CHANGE_FIELD_PROFIL,
  value,
  id,
});

export const saveEditAnimal = (
) => ({
  type: SAVE_EDIT_ANIMAL,

});

export const saveEditUser = (
) => ({
  type: SAVE_EDIT_USER,

});

export const saveEditUserAsso = (
) => ({
  type: SAVE_EDIT_USER_ASSO,

});

export const setProfilPictureName = (value) => ({
  type: SET_PROFIL_PICTURE_NAME,
  photoPath: value,
});

export const saveProfilPicture = (value) => ({
  type: SAVE_PROFIL_PICTURE,
  photo: value,
});

export const saveUserProfilPicture = (value) => ({
  type: SAVE_USER_PROFIL_PICTURE,
  photo: value,
});

export const setProfilPicturePreview = (value) => ({
  type: SET_PROFIL_PICTURE_PREVIEW,
  photo: value,
});

export const edit = () => ({
  type: EDIT,
});

export const del = () => ({
  type: DEL,
});

export const delConfirm = () => ({
  type: DEL_CONFIRM,
});

export const delUserConfirm = () => ({
  type: DEL_USER_CONFIRM,
});

export const setErrorProfil = (id, value) => ({
  type: SET_ERROR_PROFIL,
  id,
  value,
});
