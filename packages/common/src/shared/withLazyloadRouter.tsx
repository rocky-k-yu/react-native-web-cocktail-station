import React, { Suspense } from 'react';
import {  Text } from 'react-native';

const LoadingScreen = (props: any) => <Text>loading...</Text>;



const withLazyloadRouterImpl = (Component: React.ComponentType) => {
  const MiniAppScreen = (props: any) => {
    console.log('withLazyloadScreenImpl', props)
    return (<Suspense fallback={LoadingScreen}>
    <Component {...props}/>
  </Suspense>)
  }
  return MiniAppScreen;
}

export const withLazyloadRouter = withLazyloadRouterImpl;