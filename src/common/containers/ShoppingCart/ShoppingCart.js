import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./ShoppingCart.scss";

export const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <FontAwesomeIcon className="cart-icon" icon={faCartShopping} /> (0)
    </div>
  );
};
