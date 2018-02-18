import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";
import "../scss/style.scss";
import "../scss/core/_dropdown-menu-right.scss";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
