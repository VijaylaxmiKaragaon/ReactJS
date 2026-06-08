import React, { useState } from 'react'

function Task1() {
    const [name, setName] = useState("Vijaylaxmi");
    const changeName=()=>{
        setName("VijaylaxmiKaragaon");
    }
  return (
    <div>
      <p>My name {name}</p>
      <button onClick={changeName}>changeName</button>
    </div>
  )
}

export default Task1
