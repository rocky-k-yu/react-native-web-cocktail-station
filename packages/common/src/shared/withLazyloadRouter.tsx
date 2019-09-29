import React, { Suspense } from 'react';
import {  Text } from 'react-native';

const LoadingScreen = (props: any) => <Text>loading...</Text>;



const withLazyloadRouterImpl = (Component: React.ComponentType) => {
  const MiniAppScreen = (props: any) => {
    return (
      <Suspense fallback={LoadingScreen}>
        <Component {...props}/>
        {/* {Component(props)} */}
      </Suspense>
    )
  }
  return MiniAppScreen;
}

export const withLazyloadRouter = withLazyloadRouterImpl;