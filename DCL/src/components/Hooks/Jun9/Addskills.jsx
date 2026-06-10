import React, { useState } from 'react'

function Addskills() {
    const [skill,setSkill] = useState(["HTML","CSS"])
    const addSkill=()=>{
        setSkill([...skill,"Java"])
    }
  return (
    <div>
      <ul>
        {
        skill.map((skill,ind)=>{
            return <li key={ind}>{skill}</li>
        })
    }
    <button onClick={addSkill}>Addskill</button>
      </ul>
    </div>
  )
}

export default Addskills
