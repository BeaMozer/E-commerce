import React from "react";
import Items from "./Items";
import { Aside } from "./style";

const Cart = ({ amount, setAmount, cart, setCart }) => {
  return (
    <Aside>
      <h2>Cart</h2>
      <Items />
      <p>Valor Total: </p>
    </Aside>
  );
};

export default Cart;
