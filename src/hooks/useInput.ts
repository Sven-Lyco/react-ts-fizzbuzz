import { ChangeEvent, useState } from 'react';

export default function useInput() {
  const [firstInput, setFirstInput] = useState<number>(1);
  const [secondInput, setSecondInput] = useState<number>(1);

  function handleFirstInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFirstInput(Number(event.target.value));
  }

  function handleSecondInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSecondInput(Number(event.target.value));
  }

  return {
    firstInput,
    secondInput,
    setFirstInput,
    setSecondInput,
    handleFirstInputChange,
    handleSecondInputChange,
  };
}
