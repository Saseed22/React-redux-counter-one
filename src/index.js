import ReactDOM from "react-dom";
import React from "react";
import { legacy_createStore } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import App from "./project2/app";
import allReducer from "./project2/reducers/index";

const store = legacy_createStore(allReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
