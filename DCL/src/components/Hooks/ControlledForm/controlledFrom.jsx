import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleForm = () => {
    if (name.length < 5) {
      setError('Must be more than 5 characters');
    } else {
      setError('');
      alert('Done!!!');
    }
  };

  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleForm}>Login</button>

       <h3>{error}</h3>
    </div>
  );
}

export default ControlledForm;