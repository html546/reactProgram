import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Parent from "./Context/Parent";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "./Context/Context";
let color = "red";
ReactDOM.render(
  <Provider value={color}>
    <Parent />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
