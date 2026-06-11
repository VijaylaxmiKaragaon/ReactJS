import React, { useEffect, useState } from "react";

function FetchDataInTableFrom() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });
  return (
    <div>
      {
        <table border="1" cellPadding="10">
          <thead>
            <td>id</td>
            <td>name</td>
            <td>Email</td>
            <td>Phone</td>
          </thead>
          <tbody>
           {
             users.map((user,index)=>{
             return  <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
            })
           }
            
          </tbody>
        </table>
      }
    </div>
  );
}

export default FetchDataInTableFrom;
