//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";
//import "./icons.js";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { count } from "./component/count";

//render your react application
ReactDOM.render(<count />, document.querySelector("#app"));
