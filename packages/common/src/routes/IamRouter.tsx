import React from 'react';
import { withLazyloadMiniApp } from '../shared';

const MiniAppImpl = React.lazy(() => import('@emma-services/common-identity-access-management/src/App'));

export default withLazyloadMiniApp(MiniAppImpl);