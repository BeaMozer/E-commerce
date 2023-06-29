import { styled } from "styled-components";

export const Form = styled.form`
  font-size: 1.6rem;
  height: 50rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;

  padding: 1rem;
  gap: 0.5rem;

  legend {
    font-size: 2rem;
  }

  label {
    margin-top: 2rem;
  }

  input {
    width: 25rem;
  }
`;
