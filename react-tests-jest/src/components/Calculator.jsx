import React, { useState } from "react";
import { divide, multiply, substract, sum } from "utils/math-function";

const OPERATORS = ["+", "-", "×", "/"];

export const Calculator = ({ defaultA, defaultB, defaultOperator }) => {
  const [inputValueA, setInputValueA] = useState(
    !defaultA || isNaN(defaultA) ? 0 : Number(defaultA)
  );

  const [inputValueB, setInputValueB] = useState(
    !defaultB || isNaN(defaultB) ? 0 : Number(defaultB)
  );

  const [operator, setOperator] = useState(
    OPERATORS.includes(defaultOperator) ? defaultOperator : "+"
  );

  const renderInputA = () => {
    return (
      <input
        data-testid="inputA" // this for test the compnenet
        value={inputValueA}
        type="number"
        onChange={(e) =>
          setInputValueA(
            e.target.value ? Number.parseFloat(e.target.value) : ""
          )
        }
      />
    );
  };

  const renderInputB = () => {
    return (
      <input
        data-testid="inputB"
        value={inputValueB}
        type="number"
        onChange={(e) =>
          setInputValueB(
            e.target.value ? Number.parseFloat(e.target.value) : ""
          )
        }
      />
    );
  };

  const valueA = inputValueA || 0;
  const valueb = inputValueB || 0;

  function getResult() {
    switch (operator) {
      case "+":
        return sum(valueA, valueb);
      case "-":
        return substract(valueA, valueb);
      case "×":
        return multiply(valueA, valueb);
      case "/":
        return divideSafely(valueA, valueb);
      default:
        return "No operator provided";
    }
  }

  function divideSafely(a, b) {
    try {
      return divide(a, b);
    } catch (error) {
      return error.message;
    }
  }

  const renderSelectBox = () => {
    return (
      <div>
        <select
          data-testid="operator"
          value={operator}
          className="form-select"
          onChange={(e) => setOperator(e.target.value)}
        >
          <option>+</option>
          <option>-</option>
          <option>×</option>
          <option>/</option>
        </select>
      </div>
    );
  };

  return (
    <>
      <h1 style={{ marginBottom: 40 }}>Calculator</h1>
      {renderInputA()}
      {renderSelectBox()}
      {renderInputB()}
      <h2 style={{ marginTop: 20 }}>Result</h2>
      <span data-testid="result">{getResult()}</span>
    </>
  );
};
