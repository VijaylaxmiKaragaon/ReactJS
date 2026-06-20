import React, { useState } from 'react'

function UseMemo() {
    const [count,setCount] = useState(0)
    const square = () =>{
        return count * count;
    }
  return (
    <div>
      <p>count is : {count}</p>
      <p>square is : {square}</p>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default UseMemo
