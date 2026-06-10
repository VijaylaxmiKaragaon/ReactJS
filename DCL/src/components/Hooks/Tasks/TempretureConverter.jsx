import React, { useState } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");

  const fahrenheit =
    celsius === ""
      ? ""
      : (Number(celsius) * 9) / 5 + 32;

  return (
    <div>
      <input
        type="number"
        placeholder="Enter Celsius"
        onChange={(e) => setCelsius(e.target.value)}
      />

      <h2>{fahrenheit}°F</h2>
    </div>
  );
}

export default TemperatureConverter;