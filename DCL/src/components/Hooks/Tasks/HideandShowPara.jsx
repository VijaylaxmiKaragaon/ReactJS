import React, { useState } from 'react'

function HideandShowPara() {
    const [show,setState] = useState(true)
    const toggleParagraph=()=>{
        setState(!show)
    }
  return (
    <div>
      <button onClick={toggleParagraph}>{show ? "Hide" :"Show"}</button>
      {
        show &&
        <p>This is paragraph</p>
      }
    </div>
  )
}

export default HideandShowPara
