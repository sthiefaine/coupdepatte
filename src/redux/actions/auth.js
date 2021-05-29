export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAVE_USER = 'SAVE_USER';
export const IS_LOGGED = 'IS_LOGGED';
export const SET_ERROR_LOGIN = 'SET_ERROR_LOGIN';

export const logout = (value) => ({
  type: LOGOUT,
  value,
});

export const login = () => ({
  type: LOGIN,
});

export const isLogged = () => ({
  type: IS_LOGGED,
});

export const saveUser = ({
  isLogged,
  session,
}) => ({
  type: SAVE_USER,
  isLogged,
  // eslint-disable-next-line no-underscore-dangle
  sessionId: session._id,
  sessionUsername: session.username,
  role: session.role,
  avatar: session.avatar,
  favorites: session.favorites,
});

export const setErrorLogin = (id, value) => ({
  type: SET_ERROR_LOGIN,
  id,
  value,
});
