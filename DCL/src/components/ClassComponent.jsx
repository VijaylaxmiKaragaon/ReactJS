import React from 'react'

class ClassComponent extends React.Component{
    render(){
        return(
            <>
            <h1>This is class component</h1>
            <p>My role is {this.props.role}</p>
            <p>and city name is {this.props.city}</p>
            </>
        )
    }
}
export default ClassComponent;
