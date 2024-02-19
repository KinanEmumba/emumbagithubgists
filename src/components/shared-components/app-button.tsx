import { ReactNode } from 'react';
import styled from 'styled-components';
import { themeColor } from './app-theme';

export type StyledLoginButtonProps = {colored?: boolean};

export const StyledLoginButton = styled.span<StyledLoginButtonProps>`
  margin: 0 10px;
  padding: 10px 40px;
  color: ${(props) => (!props.colored ? themeColor : 'white')};
  background-color: ${(props) => (props.colored ? themeColor : 'white')};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.75;
    transition: all 0.25s ease-in-out;
  };
`;

const AppButton = ({
  onClick,
  buttonText,
  colored,
}:{
  onClick: () => void,
  buttonText: ReactNode | string,
  colored?: boolean
}) => {
  return (
    <StyledLoginButton
      onClick={() => onClick()}
      colored={colored}
    >
      {buttonText}
    </StyledLoginButton>
  )
}

export default AppButton;