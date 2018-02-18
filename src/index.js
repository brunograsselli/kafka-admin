import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";
import "../scss/style.scss";
import "../scss/core/_dropdown-menu-right.scss";

// Containers
import App from "./App";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" name="Home" component={App} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
