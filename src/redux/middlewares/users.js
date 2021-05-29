import api from "src/services/api";

// import users from 'src/data/users';
import { SET_FAVORIS, saveFavoris } from "src/redux/actions/users";

import { scrollToTop } from "src/redux/actions";

const users = (store) => (next) => (action) => {
  switch (action.type) {
    case SET_FAVORIS: {
      console.log("SET_FAVORIS MIDDLEWARE");
      const state = store.getState();
      const { targetId, id } = action;

      // const { id } = state.users.session;

      console.log("SET_FAVORIS id", id);
      console.log("SET_FAVORIS target", targetId);
      api
        .post(
          "user/favorite",
          {
            _id: id,
            targetId,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log("SET_FAVORIS => response", response);
          store.dispatch(scrollToTop(false));
          store.dispatch(saveFavoris({ ...response.data }));
        })
        .catch((error) => {});
      // next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default users;
