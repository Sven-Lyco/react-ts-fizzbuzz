import styled from 'styled-components';

interface Props {
  children: string;
  onClick: () => void;
}

export default function Button(props: Props) {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
}

const StyledButton = styled.button`
  font-size: larger;
  font-weight: bolder;
  align-self: center;
  padding: 5px;
`;
