import React from 'react';
import {withLazyloadScreen} from '../shared';

const MiniAppImpl = React.lazy(() => import('components/src/MiniApp'));

export default withLazyloadScreen(MiniAppImpl);