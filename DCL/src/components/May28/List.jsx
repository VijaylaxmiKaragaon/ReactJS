import React from "react";

function List(){
    let Fet=["HTML","CSS","JS","REACTJS"];
    return(
        <>
        {
            <ul style={{paddingLeft:"20px"}}>
                {
                    Fet.map((x)=>{
                        return <li>{x}</li>
                    })
                }
            </ul>
        }
        </>
    )
}

export default List;