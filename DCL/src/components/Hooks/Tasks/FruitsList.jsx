import React, { useState } from "react";

function FruitsList() {
  const [fruits, setFruits] = useState([
    "Apple",
    "Mango"
  ]);

  const addFruit = () => {
    setFruits([...fruits, "Banana"]);
  };

  return (
    <div>
      <button onClick={addFruit}>
        Add Banana
      </button>

      <h2>{fruits.join(", ")}</h2>
    </div>
  );
}

export default FruitsList;