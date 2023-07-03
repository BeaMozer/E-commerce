import React from "react";
import Items from "./Items";
import { Aside } from "./style";

const Cart = ({ amount, setAmount, cart, setCart, addToCart }) => {
  console.log(addToCart);
  return (
    <Aside>
      <h2>Cart</h2>
      <Items cart={cart} setCart={setCart} addToCart={addToCart} />
      <p>Valor Total: </p>
    </Aside>
  );
};

export default Cart;
