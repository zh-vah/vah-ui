// const show = require('./show')
import React from "react";
import { render } from "react-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./style/index.scss";

import App from "./app";

const About = function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
