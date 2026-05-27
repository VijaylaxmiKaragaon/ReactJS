import React from "react";

class CounterApp extends React.Component{
    state={count:0};
    increase=()=>{
        this.setState(
            {count:this.state.count+1}
        )
    }
 render(){
        return(
            <>
            <h1>Count= {this.state.count}</h1>
             <button onClick={this.increase}>Click Increment </button>
            </>
        )
    }
   
}
export default CounterApp;