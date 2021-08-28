import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createHistory from "history/createBrowserHistory";
import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";

const history = createHistory();

ReactDOM.render(
  <BrowserRouter>
    <Router history={history}>
      <App />
    </Router>
  </BrowserRouter>,
  document.getElementById("root")
);
