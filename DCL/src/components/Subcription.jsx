import React from 'react'

class Subcription extends React.Component{
    state={a:"Please subcribe..!",b:"subcribe"}
    changeVal=()=>{
        this.setState(
            {a:"Thank you for subcribing",b:"subcribed"}
        )
    }
    render(){
        return(
            <>
            <h1>{this.state.a}</h1>
            <button onClick={this.changeVal}>{this.state.b}</button>
            </>
        )
    }
}
export default Subcription;