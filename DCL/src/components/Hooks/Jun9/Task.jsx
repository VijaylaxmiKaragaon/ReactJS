import React, { useState } from 'react'

function Task() {
    const [arr,setArr] = useState([{name:"raj",age:26},
        {name:"naga",age:42},
        {name:"nagaraj",age:32}
    ])
    const changeArr=()=>{
        setArr([...arr,{name:"naga",age:18}])
    }
  return (
    <div>
      <ul>
        {arr.map((person, ind) => {
          return (
            <li key={ind}>
              {person.name} - {person.age}
            </li>
          );
        })}
      </ul>
      <button onClick={changeArr}>Add Person</button>
    </div>
  )
}

export default Task
