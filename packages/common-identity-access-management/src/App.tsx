import React from "react";
import { Redirect, Route } from '@emma-services/common/src/shared';

import LoginStep1 from './routes/LoginStep1';
import LoginStep2 from './routes/LoginStep2';
import LoginStep3 from './routes/LoginStep3';

export function AppRouter(props: any){
  const { match : { url} } = props;
  return (
    <>
      <Redirect exact from={`${url}/`} to={`${url}/1`}/>
      <Route path={`${url}/1`} component={LoginStep1} />
      <Route path={`${url}/2`} component={LoginStep2} />
      <Route path={`${url}/3`} component={LoginStep3} />
    </>
  )
}



export default AppRouter;