import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

const onClick = jest.fn();
const children = 'Show FizzBuzz';

describe('Button', () => {
  it('renders a button', () => {
    render(<Button onClick={onClick}>{children}</Button>);

    const button = screen.getByRole('button', { name: 'Show FizzBuzz' });
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    render(<Button onClick={onClick}>{children}</Button>);

    const button = screen.getByRole('button', { name: 'Show FizzBuzz' });
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
