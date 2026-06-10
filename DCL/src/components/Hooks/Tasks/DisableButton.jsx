import React, { useState } from "react";

function DisableButton() {
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = () => {
    setDisabled(true);
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        disabled={disabled}
      >
        Submit
      </button>

      {disabled && (
        <h2>Button disabled</h2>
      )}
    </div>
  );
}

export default DisableButton;