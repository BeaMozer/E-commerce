import React from "react";
import { ProductItems } from "./style";

function Items({ cart, setCart, addToCart }) {
  return (
    <ProductItems>
      <p>x0 {addToCart}</p>
      <button>remover</button>
    </ProductItems>
  );
}

export default Items;
