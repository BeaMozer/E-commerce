import React from "react";
import ProductCard from "./ProductCard";
import { Main } from "./style";

const Home = (props) => {
  const { ProductList } = props;

  return (
    <Main>
      <div className="container">
        <p>Quantidade de produtos:</p>

        <div className="container-order">
          <label htmlFor="order">Ordenação:</label>
          <select name="order" id="order">
            <option value="crescent">Crescente</option>
            <option value="decreasing">Decrescente</option>
          </select>
        </div>
      </div>

      <div className="cards">
        <ProductCard
          productName={ProductList[0].name}
          productValue={ProductList[0].value}
          productImage={ProductList[0].imageUrl}
        />
        <ProductCard
          productName={ProductList[1].name}
          productValue={ProductList[1].value}
          productImage={ProductList[1].imageUrl}
        />
        <ProductCard
          productName={ProductList[2].name}
          productValue={ProductList[2].value}
          productImage={ProductList[2].imageUrl}
        />
      </div>
    </Main>
  );
};

export default Home;
