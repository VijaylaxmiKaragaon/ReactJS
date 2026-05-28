import React from "react";

function List1(){
    let Fet=["NagaRaj","Naga","Raj","RajNaga"];
    return(
        <>
        {
            <ol>
                {
                    Fet.map((x)=>{
                        return <li>{x}</li>
                    })
                }
            </ol>
        }
        </>
    )
}

export default List1;