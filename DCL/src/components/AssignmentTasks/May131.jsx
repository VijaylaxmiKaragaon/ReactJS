import React from 'react'

class May131 extends React.Component{

/////Task2
    state={src:"https://tse1.mm.bing.net/th/id/OIP.0scvWcqZxDG19oQcEs49qQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",btn:"subscribe"}
    changeVal=()=>{
        this.setState(
            {src:"https://m.media-amazon.com/images/I/817zi0yXnJL.jpg",btn:"subcribed"}
        )
    }
    render(){
        return(
            <>
             <img src={this.state.src} alt="" width="400"/>
             <button onClick={this.changeVal}>{this.state.btn} </button>
            </>
        )
    }
   
}
export default May131;