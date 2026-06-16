import React, { useState } from 'react'

function UserInputForm() {
    const [name,setName] = useState('');
    const [password,setPass] = useState('');
    const [error,setError] = useState('');

    const handleForm = () =>{
        if(name.length < 5){
            setError("Must be more that 5 characters");
        } else{
            setError('');
            alert('Done!');
        }
    };
  return (
    <div>
      <label htmlFor="">Username</label>
      <input type="text" name="" id="" value={name} onChange={(e)=> setName(e.target.value)}/>
      <label htmlFor="">Password</label>
      <input type="password" name="" id="" value={password} onChange={(e)=> setPass(e.target.value)} />
      <button onClick={handleForm}>Login</button>

       <h3>{error}</h3>
    </div>
  )
}

export default UserInputForm
