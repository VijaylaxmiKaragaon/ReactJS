import React, { useState } from 'react'

function Count() {
    const [count,setCount] = useState(0)
    const changeCount=()=>{
        setCount(count+1);
    }
  return (
    <div>
      <p>count is: {count}</p>
      <button onClick={changeCount}>Increment</button>
    </div>
  )
}

export default Count
