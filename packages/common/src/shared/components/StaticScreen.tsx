import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Link } from "./Routing";


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
      <Text style={styles.title}>{title || "A demo of StaticScreen"}</Text>
      {children}
      {link &&
        <Link
          to={link}>
          <Text>{`Click to go ${link}`}</Text>
        </Link>
      }
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