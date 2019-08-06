//React
import React from "react";
import ReactDOM from "react-dom";
//Redux
import { Provider } from "react-redux";
import store from "./store/store";
//Stylesheets
import "antd/dist/antd.css";
import "flag-icon-css/css/flag-icon.min.css";
import "./index.css";
//Component
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url =
//   "https://sherpa-integration-dev.firebaseapp.com/v1/cdn/localization/";
// fetch(`${url}zh.json`)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(() =>
//     console.log("Can’t access " + url + " response. Blocked by browser?")
//   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
