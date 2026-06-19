import React from 'react'

function Btn({username,setusername}) {
    const addname=()=>{
        setusername("Nagaraj")
    }
  return (
    <div>
      <button onclick={addname}>Add name</button>
    </div>
  )
}

export default Btn
