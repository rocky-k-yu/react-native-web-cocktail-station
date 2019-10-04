import React, { useContext } from 'react';
import { Text } from 'react-native';
import { StaticScreen, Link } from '../shared';
import { Store as AdminStore } from "../context/authen";

export default () => {
  const { state } = useContext(AdminStore);
  console.log('home', state)
  return (
    <StaticScreen title="HomeScreen in MainApp" link="MiniApp">
      <Link to="/"><Text>Exit</Text></Link>
      {
        !state.isAuth && <Link to="/login/"><Text>Login Mini App</Text></Link>
      }
    </StaticScreen >
  )
}