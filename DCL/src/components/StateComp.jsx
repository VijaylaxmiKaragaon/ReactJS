import React from 'react'

class StateComp extends React.Component{
    state={name:"vijaylaxmi",age:22,gender:"female"}
    changeVal=()=>{
        this.setState(
            {name:"vijju"}
        )
    }
    render(){
        return(
            <>
            <p>My name is {this.state.name}</p>
            <button onClick={this.changeVal}>Change the name</button>
            </>
        )
    }
}
export default StateComp;