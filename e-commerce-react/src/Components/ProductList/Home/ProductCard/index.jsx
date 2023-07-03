import React from "react";
import { Card } from "./style";

const ProductCard = ({
  productName,
  productValue,
  productImage,
  addToCart,
  cart,
  setCart,
}) => {
  return (
    <Card>
      <div className="image-card">
        <img src={productImage} />
      </div>
      <div className="description-card">
        <p>{productName}</p>
        <p>{productValue}</p>
        <button type="submit" onClick={(event) => addToCart(event, setCart)}>
          Adicionar ao Carrinho
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;
