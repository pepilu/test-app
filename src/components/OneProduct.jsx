import React from "react";
//stavljam zagrade yato sto mi ne treba sve zivo
import { BsPlusLg, BsDashLg } from "react-icons/bs";

const OneProduct = () => {
  //stil definisan u varijabli
  //ili "inline stil" koji ide u duple viticaste {{neki inline stil}}
  const stil = { margin: 1 + "em", borderStyle: "solid" };
  return (
    <div className="card" style={stil}>
      <img
        className="card-img-top"
        src="https:/picsum.photos/200"
        alt="Slika proizvoda"
      ></img>
      <div className="card-body">
        <h3 className="card-title">Product title</h3>
        <p className="card-text">This is a short description of the product.</p>
        <button className="btn">
          <BsPlusLg />
        </button>
        <button className="btn">
          <BsDashLg />
        </button>
      </div>
    </div>
  );
};

export default OneProduct;
