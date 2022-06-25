import { useState } from 'react';

export default function useCount() {
  const [count, setCount] = useState<number>(1);

  function handleIncrementCount() {
    let newCount = count;
    setCount((newCount += 1));
  }

  function handleDecrementCount() {
    let newCount = count;
    if (count > 1) {
      setCount((newCount -= 1));
    }
  }
  return { count, handleIncrementCount, handleDecrementCount };
}
