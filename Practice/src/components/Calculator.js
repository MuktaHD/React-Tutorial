import React, { useState } from 'react';
// import './calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };
  return (
    <div className='calculator'>
      <input type='number' onChange={(e) => setNum1(e.target.value)} />
      <input type='number' onChange={(e) => setNum2(e.target.value)} />
      {/* <input type='string' onChange={(e) => setResult(e.target.value)} /> */}
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <p>Show Result: {result}</p>
    </div>
  );
};

export default Calculator;
