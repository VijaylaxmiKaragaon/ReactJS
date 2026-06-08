import React, { useState } from 'react'

function BackgroundColorChange() {
    const [color,setColor] = useState("White")
    const changeColor=()=>{
        setColor("Red")
    }
  return (
    <div style={{backgroundColor:color,
        height:"100vh"
    }}> 
    <h2>Background Color Change</h2>
    <button onClick={changeColor}>Change color</button>
      
    </div>
  )
}

export default BackgroundColorChange
