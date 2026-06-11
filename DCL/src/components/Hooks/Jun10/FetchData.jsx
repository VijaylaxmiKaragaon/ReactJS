import React, { useEffect, useState } from 'react'

function FetchData() {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(responce=>responce.json())
            .then(data=>setUsers(data))
    })
  return (
    <div>
      {
        <ul>
            {
                users.map((user,index)=>{
                    return <li key={index}>{user.name}</li>
                })
            }
        </ul>
      }
        <hr />
        <ol>
          {
            users.map((user,index)=>{
              return <li key={index}>{`${user.username} -> ${user.email}`}</li>
            })
          }
        </ol>
      
    </div>
  )
}

export default FetchData
