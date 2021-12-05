import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//JSX kod je u pitanju, ne HTML
const komp = <h1 className="nekaKlasa">Cao svima</h1>;

ReactDOM.render(komp, document.getElementById("root"));
