import React, { Component } from "react";

class HideShow extends Component {

  state = {
    show: true
  };

  toggleParagraph = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div>

        <button onClick={this.toggleParagraph}>
          {this.state.show ? "Hide" : "Show"}
        </button>

        {
          this.state.show &&
          <p>
            This is a paragraph.
          </p>
        }

      </div>
    );
  }
}

export default HideShow;