import React from "react";

function EligibleToVote() {
    let age=24;

    return(
        <>
        {
            (age>18)?<h1>Eligible to Vote</h1> : <h1>Not eligible to vote</h1>
        }
        </>
    )
}

export default EligibleToVote;