import React, { useState, useContext, useEffect } from 'react';
import { StaticScreen } from '@emma-services/common/src/shared'
import { Store as AdminStore, ILogin } from "@emma-services/common/src/context/authen"

const LoginShowHints = () => {

  const { state, dispatch } = useContext(AdminStore);
  const login = () => dispatch({ type: "LOGIN" });
  useEffect(() => {
    login();
  }, []);

  return (
    <StaticScreen title="Show optional hints" link="/home" />
  )
}

export default LoginShowHints;