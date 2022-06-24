import { renderHook, act } from '@testing-library/react';
import useFizzBuzz from './useFizzBuzz';
import useInput from './useInput';

test('should use useFizzBuzz', () => {
  const { result } = renderHook(() => useFizzBuzz());

  expect(result.current.fizzBuzzArray).toEqual<string[]>([]);
  expect(result.current.counter).toEqual<string | number>(1);
  expect(typeof result.current.showNumbersOrFizzBuzz).toBe('function');
  expect(typeof result.current.handleFizzBuzzFunction).toBe('function');
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

test('shows alert if firstInput is higher than secondInput', () => {
  window.alert = jest.fn();
  const { result } = renderHook(() => useFizzBuzz());
  const { result: inputResult } = renderHook(() => useInput());
  const firstValue = '2';
  const event = {
    target: { value: firstValue },
  } as React.ChangeEvent<HTMLInputElement>;

  act(() => {
    inputResult.current.handleFirstInputChange(event);
    result.current.handleFizzBuzzFunction(Number(firstValue), 1);
  });

  expect(inputResult.current.firstInput).toBe(2);
  expect(inputResult.current.secondInput).toBe(1);
  expect(window.alert).toBeCalled();
});
