import styled from 'styled-components';

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export default function Button({
  children,
  onClick,
}: ButtonProps): JSX.Element {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  font-size: larger;
  font-weight: bolder;
  align-self: center;
  padding: 5px;
`;
