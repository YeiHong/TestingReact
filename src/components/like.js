import React, { Component } from "react";

class Like extends Component {
    state = {
        likes: 0,
    };

    handleIncrement = () => {
        this.setState({ likes: this.state.likes + 1 });
    };

    handleDecrement = () => {
        this.setState({ likes: this.state.likes - 1 });
    };

    render() {
        return (
            <div>
                <p>Likes: {this.state.likes}</p>
                <button id="increment" onClick={this.handleIncrement} data-testid="add" >
                    Like
                </button>
                <button id="decrement" onClick={this.handleDecrement} data-testid="rest">
                    {" "}
                    Dislike
                </button>
            </div>
        );
    }
}

export default Like;