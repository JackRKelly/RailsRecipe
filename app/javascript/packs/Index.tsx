import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../assets/stylesheets/index.scss";
import App from "./App";
import { StrictMode } from "react";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
