import React, { useState } from 'react';

const APP = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  let debounceTimeout;

  const updateSumDebounced = (numbers) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      setSum(sum);
    }, 500); 
  };

  const handleInputChange = (event) => {
    const input = event.target.value.trim();
    if (input === '') {
      setNumbers([]);
      setSum(0);
      return;
    }

    const newNumber = parseFloat(input);
    if (!isNaN(newNumber)) {
      setNumbers((prevNumbers) => [...prevNumbers, newNumber]);
      updateSumDebounced([...numbers, newNumber]);
    }
  };

  return (
    <div>
     <h1>Sum Calculator</h1>
        <input type="number" onChange={handleInputChange} />
      
      <p>Sum: {sum}</p>
    </div>
  );
};

export default APP;
