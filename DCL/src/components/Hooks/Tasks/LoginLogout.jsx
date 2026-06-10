import React, { useState } from "react";

function LoginLogout() {
  const [status, setStatus] = useState("Login");

  const toggleButton = () => {
    setStatus(
      status === "Login"
        ? "Logout"
        : "Login"
    );
  };

  return (
    <div>
      <h2>{status}</h2>

      <button onClick={toggleButton}>
        {status}
      </button>
    </div>
  );
}

export default LoginLogout;