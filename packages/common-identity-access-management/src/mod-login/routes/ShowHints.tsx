import React, { useState, useContext } from 'react';
import { StaticScreen } from '@emma-services/common/src/shared'
import { Store as AdminStore, ILogin } from "@emma-services/common/src/context/authen"
import { LoginButton } from '../components/LoginButton'

const LoginShowHints = () => {

  const { state, dispatch } = useContext(AdminStore);
  const login = () => dispatch({ type: "LOGIN" });

  return (
    <StaticScreen title="Show optional hints" link="/home" >
      <LoginButton login={login} state={state} />
    </StaticScreen>
  )
}

export default LoginShowHints;