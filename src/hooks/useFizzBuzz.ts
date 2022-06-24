import { useState } from 'react';
import useInput from './useInput';

export default function useFizzBuzz() {
  const [fizzBuzzArray, setFizzBuzzArray] = useState<string[]>([]);
  const { setFirstInput, setSecondInput } = useInput();

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

  return {
    fizzBuzzArray,
    showNumbersOrFizzBuzz,
    handleFizzBuzzFunction,
    handleReset,
  };
}
