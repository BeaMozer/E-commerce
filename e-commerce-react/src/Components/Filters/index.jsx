import React from "react";
import { Form } from "./style";

const Filters = () => {
  return (
    <div>
      <Form>
        <legend>Filters</legend>
        <label htmlFor="min-value">Valor mínimo:</label>
        <input type="number" id="min-value" />

        <label htmlFor="max-value">Valor máximo:</label>
        <input type="number" id="max-value" />

        <label htmlFor="search-name">Busca por nome:</label>
        <input type="number" id="search-name" />
      </Form>
    </div>
  );
};

export default Filters;
