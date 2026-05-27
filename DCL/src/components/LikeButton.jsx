import React, { Component } from "react";

class LikeButton extends Component {

  state = {
    likes: 0
  };

  increaseLike = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  render() {
    return (
      <div>

        <h2>Likes = {this.state.likes}</h2>

        <button onClick={this.increaseLike}>
          Like
        </button>

      </div>
    );
  }
}

export default LikeButton;