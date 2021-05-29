// Action Types
export const CHANGE_FIELD_SIGN_UP = 'CHANGE_FIELD_SIGN_UP';
export const SIGN_UP = 'SIGN_UP';
export const SET_ERROR_SIGN_UP = 'SET_ERROR_SIGN_UP';
export const SELECT_ROLE = 'SELECT_ROLE';
export const ACCOUNT_VALIDATE = 'ACCOUNT_VALIDATE';

// Action creators
export const changeFieldSignUp = (value, id) => ({
  type: CHANGE_FIELD_SIGN_UP,
  value,
  id,
});

export const signUp = () => ({
  type: SIGN_UP,
});

export const selectRole = (role) => ({
  type: SELECT_ROLE,
  role,
});

export const accountValidate = (valid) => ({
  type: ACCOUNT_VALIDATE,
  valid,
});

export const setErrorSignUp = (id, value) => ({
  type: SET_ERROR_SIGN_UP,
  id,
  value,
});
