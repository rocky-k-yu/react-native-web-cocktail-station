import React from 'react';
import { Route, Redirect, StaticScreen } from '../shared'
// import AppRouter from '@emma-services/serv-identity-access-management/src/App'


import { withLazyloadRouter } from '../shared';

const MiniAppImpl = React.lazy(() => import('@emma-services/common-identity-access-management/src/App'));

export default withLazyloadRouter(MiniAppImpl);