import InputProps from '../interfaces/InputProps';

export default function Input({
  name,
  labelText,
  value,
  min,
  step,
  onChange,
}: InputProps) {
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
