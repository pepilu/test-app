import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//JSX kod je u pitanju, ne HTML
// const ime = "Petar";
// const komp = <h1 className="nekaKlasa">Cao {ime}</h1>;

// ReactDOM.render(
//   <>
//     <h1>Naslov</h1>
//     {komp}
//   </>,
//   document.getElementById("root")
// );
