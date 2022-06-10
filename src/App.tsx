import React, { useState } from 'react';
import styled from 'styled-components';

export default function App() {
  let [count, setCount] = useState<number>(1);

  const handleIncrement = (): void => {
    setCount((count += 1));
  };

  const handleDecrement = (): void => {
    if (count > 1) {
      setCount((count -= 1));
    }
  };

  return (
    <Main>
      <h1>React Typescript Fizz Buzz</h1>
      <p>
        Counting incrementally, replacing any number divisible by three with the
        word "Fizz", and any number divisible by five with the word "Buzz". For
        numbers which are multiples of both three and five print “FizzBuzz”
      </p>
      <h2>
        {count % 15 === 0
          ? 'FizzBuzz'
          : count % 3 === 0
          ? 'Fizz'
          : count % 5 === 0
          ? 'Buzz'
          : count}
      </h2>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </Main>
  );
}

const Main = styled.main`
  padding: 10px;
  text-align: center;

  button {
    font-size: larger;
    font-weight: bold;
    align-self: center;
    padding: 5px;
  }
`;
