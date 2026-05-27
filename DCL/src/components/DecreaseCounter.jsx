import React from "react";

class DecreaseCounter extends React.Component{
    state={count:10};
    Decrease=()=>{
        this.setState(
            {count:this.state.count-1}
        )
    }

    render(){
        return(
            <>
            <h1>count={this.state.count}</h1>
            <button onClick={this.Decrease}>Click Decrement</button>
            </>
        )
    }
}

export default DecreaseCounter;