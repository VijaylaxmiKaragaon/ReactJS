import React, { useState } from 'react';

function MultipleStateValues() {
  const [person, setPerson] = useState({
    name: "Vijaylaxmi",
    age: 22,
    gender: "female"
  });

  const changeAge = () => {
    setPerson({
      ...person,
      age: 25
    });
  };

  return (
    <div>
      <p>
        My name is {person.name}, age is {person.age},
        gender is {person.gender}
      </p>

      <button onClick={changeAge}>Change Age</button>
    </div>
  );
}

export default MultipleStateValues;