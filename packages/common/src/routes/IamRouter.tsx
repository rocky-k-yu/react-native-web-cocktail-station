import React from 'react';
import { Route, Redirect, StaticScreen } from '../shared'
// import AppRouter from '@emma-services/serv-identity-access-management/src/App'


import {withLazyloadRouter} from '../shared';

const MiniAppImpl = React.lazy(() => import('@emma-services/serv-identity-access-management/src/App'));

export default withLazyloadRouter(MiniAppImpl);
// const LoginStep1 = () => <StaticScreen title="login1" link="2"/>
// const LoginStep2 = () => <StaticScreen title="login2" link="3"/>
// const LoginStep3 = () => <StaticScreen title="login3" link="/home"/>


 

// type AppRouterType = {
//     match: {
//         url: string
//     }
// }

// const AppRouter = ({ match: {url}}: AppRouterType) => (
//     <>
//         <Redirect exact from={`${url}/`} to={`${url}/1`}/>
//         <Route path={`${url}/1`} component={LoginStep1} />
//         <Route path={`${url}/2`} component={LoginStep2} />
//         <Route path={`${url}/3`} component={LoginStep3} />
//     </>
// )

// export default AppRouter;
