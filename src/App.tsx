import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';

export default function App() {
  const [count, setCount] = useState<number>(1);
  const [fizzBuzzArray, setFizzBuzzArray] = useState<string[]>([]);
  const [firstInput, setFirstInput] = useState<number>(1);
  const [secondInput, setSecondInput] = useState<number>(1);

  return (
    <Main>
      <h1>React Typescript FizzBuzz</h1>
      <p>
        Counting incrementally, replacing any number divisible by three with the
        word "Fizz", and any number divisible by five with the word "Buzz". For
        numbers which are multiples of both three and five print “FizzBuzz”
      </p>
      <h2>{showNumbersOrFizzBuzz(count)}</h2>
      <Button onClick={handleDecrement}>-</Button>
      <Button onClick={handleIncrement}>+</Button>
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
        <Button onClick={() => handleFizzBuzzFunction(firstInput, secondInput)}>
          Show FizzBuzz
        </Button>
        <Button onClick={() => handleReset()}>Reset</Button>
      </InputWrapper>
      <List role="list">
        {fizzBuzzArray.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </List>
    </Main>
  );

  function showNumbersOrFizzBuzz(count: number) {
    switch (true) {
      case count % 15 === 0:
        return 'FizzBuzz';
      case count % 3 === 0:
        return 'Fizz';
      case count % 5 === 0:
        return 'Buzz';
      default:
        return count;
    }
  }

  function handleIncrement() {
    let newCount = count;
    setCount((newCount += 1));
  }

  function handleDecrement() {
    let newCount = count;
    if (count > 1) {
      setCount((newCount -= 1));
    }
  }

  function handleFirstInputChange(event: ChangeEvent<HTMLInputElement>) {
    setFirstInput(Number(event.target.value));
  }

  function handleSecondInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSecondInput(Number(event.target.value));
  }

  function handleFizzBuzzFunction(firstInput: number, secondInput: number) {
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
      alert('The second number must be greater than the first number!');
    }
  }

  function handleReset() {
    setFirstInput(1);
    setSecondInput(1);
    setFizzBuzzArray([]);
  }
}

const Main = styled.main`
  padding: 10px;
  text-align: center;
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
