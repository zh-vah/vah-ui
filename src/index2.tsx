// const show = require('./show')
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import "./style/index.scss";

import App from "./app";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fas);

// export { default as Button } from "./components/Button";
// export { default as Menu } from "./components/Menu";
// export { default as AutoComplete } from "./components/AutoComplete";
// export { default as Icon } from "./components/Icon";
// export { default as Input } from "./components/Input";
// export { default as Upload } from "./components/UpLoad";
// export { default as Progress } from './components/Progress'
// export { default as Transition } from './components/Transition'
// export { default as Upload } from './components/Upload'
