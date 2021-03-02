import { findRenderedComponentWithType } from 'react-dom/test-utils';
import './App.css';
import React, { useState, useEffect } from 'react';
function App() {

  const [number, setTotal] = useState(1);
  const [answer, setAnswer] = useState("");
  const [birthday, setBirthday] = useState("");

  // create counter
  // if current number is % by 3 and 5 output FizzBuzz
  // if current number is % 3 output fizz
  // if current number is % 5 output buzz
  //
  // have counter button with increment number \

  useEffect(() => {
    fizzBuzz(number);
    handleBirthday(number);
  });

  const fizzBuzz = (number) => {
  if (number === 0) {
    setAnswer(number)
  }
  else if (number % 3 === 0 && number % 5 === 0) {
    setAnswer("fizzbuzz")
  } else if (number % 3 === 0) {
    setAnswer("fizz")
  } else if (number % 5 === 0) {
    setAnswer("buzz")
  } else {
    setAnswer(number);
  }
}

  const handleIncrement = () => {
    setTotal(number + 1)
  }

  const handleDecrement = () => {
    setTotal(number - 1)
  }

  const handleBirthday = (number) => {
    if (number === 32) {
    setBirthday("Happy 32nd Birthday Shufan!")
  }}

  return (
    <>
    <h2>Answer is {answer}</h2>
    <h2>{birthday}</h2>
    <button value={number} onClick={handleIncrement}> add 1 </button>
    <button value={number} onClick={handleDecrement}> subtract 1 </button>

    
    </>

  );
}

export default App;
