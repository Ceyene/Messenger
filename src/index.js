import React from "react";
import ReactDOM from "react-dom";

import Messenger from "./Messenger";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Messenger />
  </React.StrictMode>,
  rootElement
);
