export const HANDLE_TOGGLER_CLICK = 'HANDLE_TOGGLER_CLICK';

export const HANDLE_CLICK_NAV_LINK = 'HANDLE_CLICK_NAV_LINK';
export const REDIRECT_TO_HOME = 'REDIRECT_TO_HOME';

export const SET_ERROR = 'SET_ERROR';
export const CLEAN_ERROR = 'CLEAN_ERROR';

export const SCROLL_TO_TOP = 'SCROLL_TO_TOP';

export const scrollToTop = (value) => ({
  type: SCROLL_TO_TOP,
  scrollToTop: value,
});

export const handleTogglerClick = () => ({
  type: HANDLE_TOGGLER_CLICK,
});

export const handleClickNavLink = (linkvalue) => ({
  type: HANDLE_CLICK_NAV_LINK,
  linkvalue,
});

export const redirectToHome = (value) => ({
  type: REDIRECT_TO_HOME,
  redirectToHome: value,
});

export const setError = (id, value) => ({
  type: SET_ERROR,
  id,
  value,
});

export const cleanError = () => ({
  type: CLEAN_ERROR,
});
