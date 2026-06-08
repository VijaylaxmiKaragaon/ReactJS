import React, { useState } from 'react'

function StudentNameDisplay() {
    const [name,setName] = useState("Vijaylaxmi")
    const changeName=()=>{
        setName("Karagaon")
    }
  return (
    <div>
      <p>My name is:{name}</p>
      <button onClick={changeName}>upadate</button>
    </div>
  )
}

export default StudentNameDisplay
