import React, { useState } from 'react'

function ChangeAge() {
    const [person,setAge] = useState({name:"Vijaylaxmi",age:52})
    const changeAges=()=>{
        setAge({...person,age:62})
    }
  return (
    <div>
      <p>my name is {person.name},
        my age is {person.age}
      </p>
      <button onClick={changeAges}>changeAge</button>
    </div>
  )
}

export default ChangeAge
