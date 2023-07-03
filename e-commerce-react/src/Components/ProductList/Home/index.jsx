import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Main } from "./style";

const Home = (props) => {
  const {
    productList,
    handleChange,
    amount,
    setAmount,
    cart,
    setCart,
    addToCart,
  } = props;

  const [ordination, setOrdination] = useState("");
  console.log(addToCart);

  return (
    <Main>
      <div className="container">
        <p>Quantidade de produtos:</p>

        <div className="container-order">
          <label htmlFor="order">Ordenação:</label>
          <select
            name="order"
            id="order"
            value={ordination}
            onChange={(event) => handleChange(event, setOrdination)}
          >
            <option disabled value="">
              Selecione
            </option>
            <option value="crescent">Crescente</option>
            <option value="decreasing">Decrescente</option>
          </select>
        </div>
      </div>

      <div className="cards">
        {productList.map((item, index) => (
          <ProductCard
            key={index}
            productName={item.name}
            productValue={item.value}
            productImage={item.imageUrl}
            addToCart={addToCart}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </Main>
  );
};

export default Home;
