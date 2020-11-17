import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";
import App from "../components/App";
import { StrictMode } from "react";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
