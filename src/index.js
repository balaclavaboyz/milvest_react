import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Router, Route, Switch } from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);
