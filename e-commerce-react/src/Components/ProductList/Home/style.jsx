import { styled } from "styled-components";

export const Main = styled.div`
  font-size: 1.6rem;
  padding: 1rem;

  .container {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 2rem;
    }

    label {
      padding-right: 1.5rem;
    }
  }

  .cards {
    display: flex;
    justify-content: space-around;
  }
`;
