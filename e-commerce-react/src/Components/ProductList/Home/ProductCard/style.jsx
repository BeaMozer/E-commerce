import { styled } from "styled-components";

export const Card = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 40rem;
  width: 30rem;
  margin-top: 2rem;

  .image-card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    border: 1px solid black;

    img {
      width: 40rem;
      max-height: 28rem;
    }
  }

  .description-card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;

    button {
      width: 60%;
      height: 3rem;
      align-self: center;
      border-radius: 0.5rem;
      color: white;
      background-color: orange;
      border: none;
      cursor: pointer;
    }
  }
`;
