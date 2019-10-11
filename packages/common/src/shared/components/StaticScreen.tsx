import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import ThemeHeadline1 from '@emma-services/common/src/shared/components/ThemeHeadline1';
import ThemeHeadline2 from '@emma-services/common/src/shared/components/ThemeHeadline2'
import ThemeTextLink from '@emma-services/common/src/shared/components/ThemeTextLink'
import ThemeParagraph from '@emma-services/common/src/shared/components/ThemeParagraph'

type StaticProps = {
  title: string,
  subtitle?: string,
  link?: string,
  
}

/**
 * Static screen for prototyping.
 * @param title Screen's title
 * @param link Optional link to next page of happy journey or expected auto redirect
 * @param children Optional dependency injection for component reuse
 */
export const StaticScreen: FunctionComponent<StaticProps> = ({ title, subtitle, link, children }) => {
  if(!subtitle) subtitle = `Dummy Subtitle of ${title}` // if no subtitle
  return (
    <View style={styles.dummy}>
      <ThemeHeadline1>{title}</ThemeHeadline1>
      {subtitle && <ThemeHeadline2>{subtitle}</ThemeHeadline2>}
      {children}
      {link &&
        <ThemeTextLink to={link}>{`Click to go ${link}`}</ThemeTextLink>
      }
      <ThemeParagraph>Text in theme paragraph</ThemeParagraph>
    </View>
  )
}


const styles = StyleSheet.create({
  dummy: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default StaticScreen;