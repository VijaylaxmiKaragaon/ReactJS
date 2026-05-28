import React from "react";

function List2(){
    let Fet=[1,2,3,4,5,6,7,8,9];
    return(
        <>
        {
            <ul>
                {
                    Fet.map((x)=>{
                        if(x%2==0){
                          return <li>{x}</li>;
                        }
                        
                    })
                }
            </ul>
        }
        </>
    )
}

export default List2;