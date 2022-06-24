import { renderHook, act } from '@testing-library/react';
import useFizzBuzz from './useFizzBuzz';
import useInput from './useInput';

test('should use fizzBuzzArray', () => {
  const { result } = renderHook(() => useFizzBuzz());

  expect(result.current.fizzBuzzArray).toEqual<string[]>([]);
  expect(typeof result.current.showNumbersOrFizzBuzz).toBe('function');
  expect(typeof result.current.handleFizzBuzzFunction).toBe('function');
  expect(typeof result.current.handleReset).toBe('function');
});

test('should show FizzBuzz', () => {
  const { result } = renderHook(() => useFizzBuzz());

  act(() => {
    result.current.showNumbersOrFizzBuzz(15);
  });
  expect(result.current.counter).toBe('FizzBuzz');
});

test('should show Fizz', () => {
  const { result } = renderHook(() => useFizzBuzz());

  act(() => {
    result.current.showNumbersOrFizzBuzz(3);
  });
  expect(result.current.counter).toBe('Fizz');
});

test('should show Buzz', () => {
  const { result } = renderHook(() => useFizzBuzz());

  act(() => {
    result.current.showNumbersOrFizzBuzz(5);
  });
  expect(result.current.counter).toBe('Buzz');
});

test('should show Number', () => {
  const { result } = renderHook(() => useFizzBuzz());

  act(() => {
    result.current.showNumbersOrFizzBuzz(1);
  });
  expect(result.current.counter).toBe(1);
});

test('should return FizzBuzz Array', () => {
  const { result } = renderHook(() => useFizzBuzz());

  act(() => {
    result.current.handleFizzBuzzFunction(1, 10);
  });
  expect(result.current.fizzBuzzArray).toStrictEqual([
    '1',
    '2',
    'Fizz',
    '4',
    'Buzz',
    'Fizz',
    '7',
    '8',
    'Fizz',
    'Buzz',
  ]);
});

test('should reset Inputs and Array', () => {
  const { result } = renderHook(() => useFizzBuzz());
  const { result: inputResult } = renderHook(() => useInput());

  act(() => {
    result.current.handleReset();
  });
  expect(result.current.fizzBuzzArray).toStrictEqual([]);
  expect(inputResult.current.firstInput).toBe(1);
  expect(inputResult.current.secondInput).toBe(1);
});
