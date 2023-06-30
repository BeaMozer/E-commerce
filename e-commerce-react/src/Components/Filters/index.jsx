import React from "react";
import { Form } from "./style";

const Filters = ({
  minFilter,
  setMinFilter,
  maxFilter,
  setMaxFilter,
  searchFilter,
  setSearchFilter,
  handleChange,
}) => {
  const clearInputs = (event) => {
    event.preventDefault();

    setMinFilter("");
    setMaxFilter("");
    setSearchFilter("");
  };

  const positiveInputs = () => {
    if (minFilter < 0 || maxFilter < 0) {
      alert("Utilize apenas valores positivos");
      // setMinFilter("");
      // setMaxFilter("");
      // setSearchFilter("");
    }
  };

  return (
    <div>
      <Form onSubmit={clearInputs}>
        <legend>Filters</legend>
        <label htmlFor="min-value">Valor mínimo:</label>
        <input
          type="number"
          id="min-value"
          value={minFilter}
          onChange={(event) => handleChange(event, setMinFilter)}
        />

        <label htmlFor="max-value">Valor máximo:</label>
        <input
          type="number"
          id="max-value"
          value={maxFilter}
          onChange={(event) => handleChange(event, setMaxFilter)}
        />

        <label htmlFor="search-name">Busca por nome:</label>
        <input
          type="text"
          id="search-name"
          value={searchFilter}
          onChange={(event) => handleChange(event, setSearchFilter)}
        />

        <button onClick={positiveInputs} type="submit">
          Filtrar
        </button>
      </Form>
    </div>
  );
};

export default Filters;
