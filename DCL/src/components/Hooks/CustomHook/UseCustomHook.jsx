import React, { useState } from 'react'

function UseCustomHook() {
    const [count, setCount]=useState(0)

    const increment=()=>{
        setCount(count+1);
    }

    const decrement=()=>{
        setCount(count-1);
    }
  return {
    count,
    increment,
    decrement
  }
}

export default UseCustomHook
