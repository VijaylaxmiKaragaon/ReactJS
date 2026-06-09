import React, { useState } from 'react'

function InputFieldDisplay() {
    const [text,setText] = useState("")
    const InputField=(event)=>{
        setText(event.target.value)
    }
  return (
    <div>
      <input type="text" name="" id="" placeholder='Enter text' onChange={InputField} />
      <h2>{text}</h2>
    </div>
  )
}

export default InputFieldDisplay
