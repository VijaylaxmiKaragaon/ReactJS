import React, { Component } from "react";

class FontSize extends Component {

  state = {
    size: 20
  };

  increaseSize = () => {
    this.setState({
      size: this.state.size + 5
    });
  };

  render() {
    return (
      <div>

        <h2
          style={{
            fontSize: `${this.state.size}px`
          }}
        >
          React Class Component
        </h2>

        <button onClick={this.increaseSize}>
          Increase
        </button>

      </div>
    );
  }
}

export default FontSize;