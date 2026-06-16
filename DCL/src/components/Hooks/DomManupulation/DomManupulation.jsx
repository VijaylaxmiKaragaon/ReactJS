import React, { useEffect, useState } from 'react'

function DomManupulation() {
    const [title,setTitle] = useState("RajProject");
    useEffect(()=>{
        document.title="dhee coding lab";
    })
  return (
    <div>
      <h1>Hello welcome to page</h1>
    </div>
  )
}

export default DomManupulation
