// Action Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SIGN_UP = 'SIGN_UP';
export const SET_ERROR = 'SET_ERROR';
export const SIGN_UP_ASSO = 'SIGN_UP_ASSO';

export const SET_FAVORIS = 'SET_FAVORIS';
export const SAVE_FAVORIS = 'SAVE_FAVORIS';

export const CHANGE_PASSWORD_TYPE = 'CHANGE_FIELD_TYPE';

// Action creators
export const changeField = (value, id) => ({
  type: CHANGE_FIELD,
  value,
  id,
});

export const setError = () => ({
  type: SET_ERROR,
});

export const signUp = () => ({
  type: SIGN_UP,
});

export const setFavoris = (id, targetId) => ({
  type: SET_FAVORIS,
  id,
  targetId,
});

export const saveFavoris = (favorisList) => ({
  type: SAVE_FAVORIS,
  favorites: favorisList,
});

export const changePasswordType = (value) => ({
  type: CHANGE_PASSWORD_TYPE,
  value: value,
})
