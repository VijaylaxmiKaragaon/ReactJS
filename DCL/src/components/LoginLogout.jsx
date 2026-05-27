import React, { Component } from "react";

class LoginLogout extends Component {

  state = {
    status: "Login"
  };

  toggleButton = () => {
    this.setState({
      status:
        this.state.status === "Login"
          ? "Logout"
          : "Login"
    });
  };

  render() {
    return (
      <div>

        <h2>{this.state.status}</h2>

        <button onClick={this.toggleButton}>
          {this.state.status}
        </button>

      </div>
    );
  }
}

export default LoginLogout;