import React, { useState } from 'react'

function ResetCounter() {
    const [count,setCount] = useState(0)
    const increment=()=>{
        setCount(count+1)
    }

    const reset=()=>{
        setCount({count:0})
    }
  return (
    <div>
      <p>count = {count}</p>
      <button onClick={increment}> Increment</button>

      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ResetCounter
