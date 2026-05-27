import React from 'react'

class May132 extends React.Component{

/////Task3
    state={count:0}
    increase=()=>{
        this.setStatestate(
            {count:this.state.count+1}
        )
    }
     decrease=()=>{
        this.setStatestate(
            {count:this.state.count-1}
        )
    }
    render(){
        return(
            <>
            <h1>count val is: {this.state.count}</h1>
             <button onClick={this.increase}>increase </button>
             <button onClick={this.decrease}>decrease</button>
            </>
        )
    }
   
}
export default May132;