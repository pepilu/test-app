import React from "react";
import { BsCartFill } from "react-icons/bs";

function NavBar() {
  return (
    <div className="navBar">
      <a>My Store</a>
      <a className="cart-items">
        <BsCartFill style={{ marginLeft: 10 }} />
        <p className="cart-num">0</p>
      </a>
    </div>
  );
}

export default NavBar;
