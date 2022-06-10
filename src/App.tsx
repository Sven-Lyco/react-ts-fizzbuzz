import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export default function App() {
  let [count, setCount] = useState<number>(1);
  let [fizzBuzzArray, setFizzBuzzArray] = useState<string[]>([]);
  let [firstInput, setFirstInput] = useState<number>(1);
  let [secondInput, setSecondInput] = useState<number>(1);

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
      <InputWrapper>
        <label htmlFor="first-number">First Number</label>
        <input
          type="number"
          name="first-number"
          id="first-number"
          value={firstInput}
          min={1}
          step={1}
          onChange={handleFirstInputChange}
        />
        <label htmlFor="second-number">Second Number</label>
        <input
          type="number"
          name="second-number"
          id="second-number"
          value={secondInput}
          min={1}
          step={1}
          onChange={handleSecondInputChange}
        />
        <button onClick={() => fizzBuzzFunction(firstInput, secondInput)}>
          Show FizzBuzz
        </button>
      </InputWrapper>
      <List role="list">
        {fizzBuzzArray?.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </List>
    </Main>
  );

  function handleIncrement() {
    setCount((count += 1));
  }

  function handleDecrement() {
    if (count > 1) {
      setCount((count -= 1));
    }
  }

  function handleFirstInputChange(event: ChangeEvent<HTMLInputElement>) {
    setFirstInput(Number(event.target.value));
  }

  function handleSecondInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSecondInput(Number(event.target.value));
  }

  function fizzBuzzFunction(firstInput: number, secondInput: number) {
    let arr: string[] = [];

    if (firstInput < secondInput) {
      for (let i = firstInput; i <= secondInput; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          arr.push('FizzBuzz');
        } else if (i % 3 === 0) {
          arr.push('Fizz');
        } else if (i % 5 === 0) {
          arr.push('Buzz');
        } else {
          arr.push(i.toString());
        }
      }
      setFizzBuzzArray(arr);
    } else {
      alert('the second number must be greater than the first number ');
    }
  }
}

const Main = styled.main`
  padding: 10px;
  text-align: center;

  button {
    font-size: larger;
    font-weight: bolder;
    align-self: center;
    padding: 5px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 50px 0;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  li {
    padding-left: 8px;
  }
`;
