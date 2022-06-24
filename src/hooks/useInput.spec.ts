import { renderHook, act } from '@testing-library/react';
import useInput from './useInput';

test('should use firstInput, secondInput, handleFirstInputChange, handleSecondInputChange', () => {
  const { result } = renderHook(() => useInput());

  expect(result.current.firstInput).toEqual<number>(1);
  expect(result.current.secondInput).toEqual<number>(1);
  expect(typeof result.current.handleFirstInputChange).toBe('function');
  expect(typeof result.current.handleSecondInputChange).toBe('function');
});

test('should set firstInput', () => {
  const { result } = renderHook(() => useInput());
  const firstValue = '1';
  const event = {
    target: { value: firstValue },
  } as React.ChangeEvent<HTMLInputElement>;

  act(() => {
    result.current.handleFirstInputChange(event);
  });
  expect(result.current.firstInput).toBe(1);
});

test('should set secondInput', () => {
  const { result } = renderHook(() => useInput());
  const secondValue = '3';
  const event = {
    target: { value: secondValue },
  } as React.ChangeEvent<HTMLInputElement>;
  act(() => {
    result.current.handleSecondInputChange(event);
  });
  expect(result.current.secondInput).toBe(3);
});
