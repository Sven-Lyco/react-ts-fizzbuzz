interface InputProps {
  name: string;
  labelText: string;
  value: number;
  min: number;
  step: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  labelText,
  value,
  min,
  step,
  onChange,
}: InputProps): JSX.Element {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input
        type="number"
        name={name}
        id={name}
        value={value}
        min={min}
        step={step}
        onChange={onChange}
      />
    </>
  );
}
