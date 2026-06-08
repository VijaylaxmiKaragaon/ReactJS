import React, { useState } from 'react'

function DecreaseCounter() {
    const [count,setCount] = useState(10)
    const changeValue=()=>{
        setCount(count-1);
    }
  return (
    <div>
      <p>Decrease Value:{count}</p>
      <button onClick={changeValue}>Decrement</button>
    </div>
  )
}

export default DecreaseCounter
