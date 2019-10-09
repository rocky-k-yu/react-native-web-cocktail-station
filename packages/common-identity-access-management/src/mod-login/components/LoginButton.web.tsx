import React from 'react';
import { IState } from "@emma-services/common/src/context/authen"
import ThemeText from '@emma-services/common/src/shared/components/ThemeText'
import ThemeTextButton from '@emma-services/common/src/shared/components/ThemeTextButton';

interface LoginButtonProps {
  login: any,
  state: IState
}

export const LoginButton: React.SFC<LoginButtonProps> = ({ login, state }) =>(
  <ThemeTextButton onClickOrPress={login} ><ThemeText>{state.isAuth ? "Logout" : "Login"} </ThemeText></ThemeTextButton>)

export default LoginButton;