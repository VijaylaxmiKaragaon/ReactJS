import React, { Component } from "react";

class LightToggle extends Component {

  state = {
    light: false
  };

  toggleLight = () => {
    this.setState({
      light: !this.state.light
    });
  };

  render() {
    return (
      <div>

        <h2>
          Light {this.state.light ? "ON" : "OFF"}
        </h2>

        <button onClick={this.toggleLight}>
          Toggle
        </button>

      </div>
    );
  }
}

export default LightToggle;