// == Import : npm
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// == Import : Router
import { BrowserRouter as Router } from "react-router-dom";

// == Import : redux - store
import { Provider } from "react-redux";
import "./styles/reset.css";
import "./styles/index.css";
import App from "./containers/App";

import store from "src/redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
