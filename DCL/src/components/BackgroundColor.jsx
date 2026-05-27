import React, { Component } from "react";

class BackgroundColor extends Component {

  state = {
    color: "white"
  };

  changeColor = () => {
    this.setState({
      color: "yellow"
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.color,
          height: "100vh",
          padding: "20px"
        }}
      >
        <h2>Background Color Change</h2>

        <button onClick={this.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}

export default BackgroundColor;