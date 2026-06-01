import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h2>Login Page</h2>

      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                type="password"
                placeholder="Enter your password"
              />
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/home">
                <button>Login</button>
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              New User? <Link to="/signup">Sign Up</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Login;