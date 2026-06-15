import React, { useEffect } from 'react'

function SettingTimer() {
    useEffect(()=>{
        setInterval(()=>{
            console.log("Executing after 3 seconds")
        },3000)
    })
  return (
    <div>
      <div>Setting Time</div>
    </div>
  )
}

export default SettingTimer
