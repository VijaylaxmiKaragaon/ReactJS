import React, { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const countCharacters = (event) => {
    const value = event.target.value;

    setText(value);
    setCount(value.length);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={countCharacters}
      />

      <h2>{count} Characters</h2>
    </div>
  );
}

export default CharacterCounter;