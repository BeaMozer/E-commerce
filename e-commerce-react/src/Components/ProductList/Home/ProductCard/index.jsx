import React from "react";
import { Card } from "./style";

const ProductCard = () => {
  return (
    <Card>
      <div className="image-card">
        <p>ProductCard</p>
      </div>

      <div className="description-card">
        <p>Nome do Produto</p>
        <p>Valor</p>
        <button>Adicionar ao Carrinho</button>
      </div>
    </Card>
  );
};

export default ProductCard;
