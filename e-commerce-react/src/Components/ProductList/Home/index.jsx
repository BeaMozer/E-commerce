import React from "react";
import ProductCard from "./ProductCard";
import { Main } from "./style";

const Home = () => {
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Main>
  );
};

export default Home;
