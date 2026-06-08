import React, { useState } from 'react'

function ToggleText() {
    const [text,setText] = useState("Welcome")

    const toggle=()=>{
        setText({text:text === "Welcome" ? "Good Bye" : "Welcome"})
    }
  return (
    <div>
      <p>{text}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default ToggleText
