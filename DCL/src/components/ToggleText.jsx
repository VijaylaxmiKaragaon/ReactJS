import React, { Component } from "react";

class ToggleText extends Component {

  state = {
    text: "Welcome"
  };

  toggle = () => {
    this.setState({
      text:
        this.state.text === "Welcome"
          ? "Good Bye"
          : "Welcome"
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.text}</h2>

        <button onClick={this.toggle}>
          Toggle
        </button>
      </div>
    );
  }
}

export default ToggleText;