import React, { useState } from "react";

function FontSize() {
  const [size, setSize] = useState(20);

  const increaseSize = () => {
    setSize(size + 5);
  };

  return (
    <div>
      <h2
        style={{
          fontSize: `${size}px`
        }}
      >
        React Functional Component
      </h2>

      <button onClick={increaseSize}>
        Increase
      </button>
    </div>
  );
}

export default FontSize;