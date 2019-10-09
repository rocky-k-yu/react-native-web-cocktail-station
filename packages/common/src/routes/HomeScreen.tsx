import React, { useContext } from 'react';
import { Text } from 'react-native';
import { StaticScreen, Link } from '../shared';
import { Store as AdminStore } from "../context/authen";
import ThemeText from '@emma-services/common/src/shared/components/ThemeText'

export default () => {
  const { state } = useContext(AdminStore);
  console.log('home', state)
  return (
    <StaticScreen title="HomeScreen in MainApp" link="MiniApp">
      <Link to="/"><ThemeText>Exit</ThemeText></Link>
      {
        !state.isAuth && <Link to="/login/"><ThemeText>Login Mini App</ThemeText></Link>
      }
    </StaticScreen >
  )
}