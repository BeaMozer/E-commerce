import Filters from "./Components/Filters";
import Home from "./Components/ProductList/Home";
import Cart from "./Components/ShoppingCart/Cart";
import styled, { createGlobalStyle } from "styled-components";
import { productList } from "./assets/productList";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif;
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  margin: 1rem;
  background-image: url("https://i.ytimg.com/vi/gqsGGwc67Tw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoACxgOKAgwIABABGCogEyh_MA8=&rs=AOn4CLCFoK2wi-98QOcrzX_uXRWn-0_pzg");
  background-size: cover;
  
`;

function App() {
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState("");
  const [amount, setAmount] = useState("");

  const handleChange = (event, setState) => {
    setState(event.target.value);
  };

  const addToCart = (event, setState) => {
    setState(event.target.value);
  };

  return (
    <MainContainer>
      <GlobalStyled />
      <Filters
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        handleChange={handleChange}
      />
      <Home
        productList={productList}
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
        handleChange={handleChange}
        addToCart={addToCart}
      />
      <Cart
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
        addToCart={addToCart}
      />
    </MainContainer>
  );
}

export default App;
