import { useEffect } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Input from './components/Input';
import useCount from './hooks/useCount';
import useFizzBuzz from './hooks/useFizzBuzz';
import useInput from './hooks/useInput';

export default function App() {
  const { count, handleIncrementCount, handleDecrementCount } = useCount();
  const {
    firstInput,
    secondInput,
    handleFirstInputChange,
    handleSecondInputChange,
  } = useInput();
  const {
    fizzBuzzArray,
    counter,
    showNumbersOrFizzBuzz,
    handleFizzBuzzFunction,
    handleReset,
  } = useFizzBuzz();

  useEffect(() => {
    showNumbersOrFizzBuzz(count);
  }, [count, showNumbersOrFizzBuzz]);

  return (
    <Main>
      <h1>React Typescript FizzBuzz</h1>
      <p>
        Counting incrementally, replacing any number divisible by three with the
        word "Fizz", and any number divisible by five with the word "Buzz". For
        numbers which are multiples of both three and five print “FizzBuzz”
      </p>
      <h2>{counter}</h2>
      <Button onClick={handleDecrementCount}>-</Button>
      <Button onClick={handleIncrementCount}>+</Button>
      <InputWrapper>
        <Input
          name="first-number"
          labelText="First number"
          value={firstInput}
          min={1}
          step={1}
          onChange={handleFirstInputChange}
        />
        <Input
          name="second-number"
          labelText="Second number"
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
