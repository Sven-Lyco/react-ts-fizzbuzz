import { renderHook, act } from '@testing-library/react';
import useCount from './useCount';

test('should use useCount hook', () => {
  const { result } = renderHook(() => useCount());

  expect(result.current.count).toBe(1);
  expect(typeof result.current.handleIncrementCount).toBe('function');
  expect(typeof result.current.handleDecrementCount).toBe('function');
});

test('should increment counter', () => {
  const { result } = renderHook(() => useCount());

  act(() => {
    result.current.handleIncrementCount();
  });
  expect(result.current.count).toBe(2);
});

test('should decrement counter', () => {
  const { result } = renderHook(() => useCount());

  act(() => {
    result.current.handleDecrementCount();
  });
  expect(result.current.count).toBe(1);
});
