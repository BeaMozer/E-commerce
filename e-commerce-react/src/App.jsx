import Filters from "./Components/Filters";
import Home from "./Components/ProductList/Home";
import Cart from "./Components/ShoppingCart/Cart";
import styled, { createGlobalStyle } from "styled-components";

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
`;

function App() {
  return (
    <MainContainer>
      <GlobalStyled />
      <Filters />
      <Home />
      <Cart />
    </MainContainer>
  );
}

export default App;
