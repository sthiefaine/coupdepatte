import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import lists from './lists';
import nav from './nav';
import users from './users';
import profils from './profils';
import signUp from './signUp';
import animals from './animals';

export default combineReducers({
  errors,
  auth,
  animals,
  lists,
  nav,
  users,
  profils,
  signUp,
});
