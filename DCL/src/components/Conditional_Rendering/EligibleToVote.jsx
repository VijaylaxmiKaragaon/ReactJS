import React from "react";

function EligibleToVote() {
    let age=24;

    // return(
    //     <>
    //     {
    //         //By using Ternary Operator
    //         // (age>18)?<h1>Eligible to Vote</h1> : <h1>Not eligible to vote</h1>

    //         //By using && operator
    //         //(age>18)&&<h1>Eligible to vote</h1>
     
    //     }
    //     </>
    // )


       //By using if-else statement
       if(age>18){
        return(
            <h1>Eligible to Vote</h1>
        )
       } else {
        return(
            <h1>Not eligible to vote</h1>
        )
       }
}

export default EligibleToVote;