import React, { useEffect, useState } from 'react'

function FetchData() {
    const [comments,setComments] = useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/comments"
            .then(responce=>responce.json())
            .then(data=>setComments(data))
        )
    })
  return (
    <div>
      {
        <ul>
            {
                comments.map((comment,index)=>{
                    return <li key={index}>{comment.body}</li>
                })
            }
        </ul>
      }
    </div>
  )
}

export default FetchData
