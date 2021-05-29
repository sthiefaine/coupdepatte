import api from "src/services/api";
import {
  GET_ANIMALS_LIST,
  saveAnimalsList,
  GET_USERS_LIST,
  saveUsersList,
} from "src/redux/actions/lists";

const lists = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USERS_LIST: {
      console.log("je veux recuperer les utilisateurs");
      api
        .get("users")
        .then((response) => {
          console.log("Middleware USERS LIST response", response);
          store.dispatch(saveUsersList(response.data, false));
        })
        .catch((error) => {
          /* const actionToDispatch = setError();
          store.dispatch(actionToDispatch); */
          console.log("Une erreur est survenue", error);
        });
      next(action);
      break;
    }
    case GET_ANIMALS_LIST:
      api
        .get("cats")
        .then((response) => {
          console.log("Middleware Animals LIST response", response);
          store.dispatch(saveAnimalsList(response.data, false));
        })
        .catch((error) => {
          /* const actionToDispatch = setError();
          store.dispatch(actionToDispatch); */
          console.log("Une erreur est survenue", error);
        });
      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default lists;
