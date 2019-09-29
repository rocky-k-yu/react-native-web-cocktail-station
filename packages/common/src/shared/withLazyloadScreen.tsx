import React, { Suspense } from 'react';
import {  Text } from 'react-native';

const withLazyloadScreenImpl = (Component: React.ComponentType) => {
  const MiniAppScreen = () => (<Suspense fallback={() => <Text>loading...</Text>}>
    <Component/>
  </Suspense>)
  return MiniAppScreen;
}

export const withLazyloadScreen = withLazyloadScreenImpl;