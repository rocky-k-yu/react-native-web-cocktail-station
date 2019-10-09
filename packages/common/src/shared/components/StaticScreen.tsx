import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Link } from "./Routing";
import ThemeHeadline1 from '@emma-services/common/src/shared/components/ThemeHeadline1';
import ThemeHeadline2 from '@emma-services/common/src/shared/components/ThemeHeadline2'
import ThemeText from '@emma-services/common/src/shared/components/ThemeText'


type StaticProps = {
  title: string,
  link?: string
}

/**
 * Static screen for prototyping.
 * @param title Screen's title
 * @param link Optional link to next page of happy journey or expected auto redirect
 * @param children Optional dependency injection for component reuse
 */
export const StaticScreen: FunctionComponent<StaticProps> = ({ title, link, children }) => {
  return (
    <View style={styles.dummy}>
      <ThemeText style={styles.title}>{title || "A demo of StaticScreen"}</ThemeText>
      {children}
      <ThemeHeadline1>Test H1</ThemeHeadline1>
      {link &&
        <Link
          to={link}>
          <ThemeText>{`Click to go ${link}`}</ThemeText>
        </Link>
      }
      <ThemeHeadline2>Test H2</ThemeHeadline2>
    </View>
  )
}


const styles = StyleSheet.create({
  dummy: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: "200"
  }
})

export default StaticScreen;