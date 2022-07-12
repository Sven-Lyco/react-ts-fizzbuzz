import styled from 'styled-components';
import ButtonProps from '../interfaces/ButtonProps';

export default function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  font-size: larger;
  font-weight: bolder;
  align-self: center;
  padding: 5px;
`;
