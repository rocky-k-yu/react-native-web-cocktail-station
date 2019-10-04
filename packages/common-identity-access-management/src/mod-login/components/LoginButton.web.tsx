import React from 'react';
import { Text } from 'react-native';
import Button from '@material-ui/core/Button';
import { IState } from "@emma-services/common/src/context/authen"

interface LoginButtonProps {
  login: any,
  state: IState
}

export const LoginButton: React.SFC<LoginButtonProps> = ({ login, state }) =>
  <Button onClick={login} ><Text>{state.isAuth ? "Logout" : "Login"} </Text></Button>

export default LoginButton;