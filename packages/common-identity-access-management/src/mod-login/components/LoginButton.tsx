import React from 'react';
import { Button } from 'react-native';
import { IState } from "@emma-services/common/src/context/authen"

interface LoginButtonProps {
  login: any,
  state: IState
}

export const LoginButton: React.SFC<LoginButtonProps> = ({ login, state }) =>
  <Button onPress={login} title={state.isAuth ? "Logout" : "Login"} />

export default LoginButton;