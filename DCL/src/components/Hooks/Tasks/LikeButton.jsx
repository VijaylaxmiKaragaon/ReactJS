import React, { useState } from 'react'

function LikeButton() {
    const [like,setLike] = useState(0)
    const increaseLike=()=>{
      setLike(like+1);
    }
  return (
    <div>
      <h2>Like : {like}</h2>
      <button onClick={increaseLike}>Like</button>
    </div>
  )
}

export default LikeButton
