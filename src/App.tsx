import React from 'react';
import styled from 'styled-components';

export default function App() {
  return (
    <Wrapper>
      <h1>React Typescript Fizz Buzz</h1>
      <p>
        Counting incrementally, replacing any number divisible by three with the
        word "fizz", and any number divisible by five with the word "buzz". For
        numbers which are multiples of both three and five print “FizzBuzz”
      </p>
      <h2>0</h2>
      <button>-</button>
      <button>+</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;

  button {
    font-size: larger;
    align-self: center;
  }
`;
