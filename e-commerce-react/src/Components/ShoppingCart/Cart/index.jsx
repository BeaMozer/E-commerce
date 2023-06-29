import React from "react";
import Items from "./Items";
import { Aside } from "./style";

const Cart = () => {
  return (
    <Aside>
      <h2>Cart</h2>
      <Items />
      <p>Valor Total: 0</p>
    </Aside>
  );
};

export default Cart;
