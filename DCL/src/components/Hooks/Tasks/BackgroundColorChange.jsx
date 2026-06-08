import React, { useState } from 'react'

function BackgroundColorChange() {
    const [color,setColor] = useState({color:"White"})
    const changeColor=()=>{
        setColor({color:"red"})
    }
  return (
    <div style={{backgroundColor:color}}> 
    <h2>Background Color Change</h2>
    <button onClick={changeColor}>Change color</button>
      
    </div>
  )
}

export default BackgroundColorChange
