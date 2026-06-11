import React, { useEffect, useState } from 'react'

function FetchDataInTableFrom() {
    const[users,setUsers] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=>setUsers(data))
    })
  return (
    <div>
      {
        <table border="1" cellPadding="10">
            <tr>
                <td>id</td>
                <td>name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
            <tr>
            </tr>
        </table>
      }
    </div>
  )
}

export default FetchDataInTableFrom
