export default interface InputProps {
  name: string;
  labelText: string;
  value: number;
  min: number;
  step: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
