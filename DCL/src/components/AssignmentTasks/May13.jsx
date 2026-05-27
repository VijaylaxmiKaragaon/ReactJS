import React from 'react'

class May13 extends React.Component{
    state={src:"https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1735281540987_Virat%20kohli%20highest%20test%20scores.jpg?type=mq"}
    changeVal=()=>{
        this.setState(
            {src:"https://images.news18.com/ibnlive/uploads/2022/12/virat-kohli-celebrates-his-44th-odi-ton-ap-photo-167066553516x9.jpg"}
        )
    }
    RCBVal=()=>{
        this.setState(
            {src:"https://i.pinimg.com/736x/43/ce/d7/43ced7c130e56ee296e42d7d16927d26.jpg"}
        )
    }
    render(){
        return(
            <>
             <img src={this.state.src} alt="" />
             <button onClick={this.changeVal}>India </button>
             <button onClick={this.RCBVal}>RCB </button>
            </>
        )
    }
}
export default May13;