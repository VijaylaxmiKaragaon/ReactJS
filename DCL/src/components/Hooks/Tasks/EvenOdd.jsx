import React, { useState } from "react";

function EvenOdd() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkNumber = (event) => {
    const value = event.target.value;

    setNumber(value);

    if (value !== "") {
      setResult(value % 2 === 0 ? "Even" : "Odd");
    } else {
      setResult("");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter number"
        value={number}
        onChange={checkNumber}
      />

      <h2>{result}</h2>
    </div>
  );
}

export default EvenOdd;