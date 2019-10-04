import React from 'react';
import { withLazyloadMiniApp } from '../shared';

const MiniAppImpl = React.lazy(() => import('components/src/MiniApp'));

export default withLazyloadMiniApp(MiniAppImpl);