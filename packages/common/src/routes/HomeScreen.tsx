import React, { useContext } from 'react';
import { StaticScreen } from '../shared';
import { Store as AdminStore } from "../context/authen";
import ThemeTextLink from '@emma-services/common/src/shared/components/ThemeTextLink'

export default () => {
  const { state } = useContext(AdminStore);
  console.log('home', state)
  return (
    <StaticScreen title="HomeScreen in MainApp" subtitle="Sub-HomeScreen" link="MiniApp">
      <ThemeTextLink to="/">Exit</ThemeTextLink>
      {
        !state.isAuth && <ThemeTextLink to="/login/">Login Mini App</ThemeTextLink>
      }
    </StaticScreen >
  )
}