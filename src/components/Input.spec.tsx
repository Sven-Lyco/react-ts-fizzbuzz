import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

const onChange = jest.fn();
const name = 'first-number';
const labelText = 'First number';
const value = 1;

describe('Input', () => {
  it('renders an input', () => {
    render(
      <Input
        name={name}
        labelText={labelText}
        value={value}
        min={1}
        step={1}
        onChange={onChange}
      />
    );
    const input = screen.getByRole('spinbutton', { name: 'First number' });
    expect(input).toBeInTheDocument();
  });

  it('has onChange function', () => {
    render(
      <Input
        name={name}
        labelText={labelText}
        value={value}
        min={1}
        step={1}
        onChange={onChange}
      />
    );
    const input = screen.getByRole('spinbutton', { name: 'First number' });
    userEvent.type(input, '2');
    expect(onChange).toHaveBeenCalled();
  });
});
