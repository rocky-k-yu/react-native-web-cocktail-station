import React, { Suspense } from 'react';
import {
  Text,
  ActivityIndicator,
  View,
  StyleSheet
} from 'react-native';

const DefaultLoadingScreen = (props: any) => {
  console.log('DefaultLoadingScreen', props)
  return (
    <View style={styles.dummy}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>This is a default loading screen from the Barista</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  dummy: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


/**
 * Enhance a lazy component with React.Suspense
 * @param Component LazyComponent produced by React.lazy()
 * @param LoadingComponent Optional zero-props components for loading screen
 */
const withLazyloadMiniappImpl = (Component: React.ComponentType, LoadingComponent?: React.ComponentType) => {
  const MiniAppScreen = (props: any) => {
    return (
      <Suspense fallback={LoadingComponent || DefaultLoadingScreen}>
        <Component {...props} />
      </Suspense>
    )
  }
  return MiniAppScreen;
}

export const withLazyloadMiniApp = withLazyloadMiniappImpl;