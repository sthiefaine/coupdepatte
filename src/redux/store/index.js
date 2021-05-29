// == Import : npm
import { createStore, applyMiddleware } from "redux";

// == Import : local
import reducer from "src/redux/reducers";
import middlewares from "src/redux/middlewares";

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
