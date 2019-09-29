import React, {FunctionComponent} from 'react';
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
  
export const StaticScreen: FunctionComponent<StaticProps> = ({title, link, children}) => {

  return (
    <View style={styles.dummy}>
        <Text>{title}</Text>
        <Text>is actually a demo of static DummyScreen</Text>
        {link && 
          <Link
            to={link}>
            <Text>{`Click to go ${link}`}</Text>
          </Link>
        }
        { children }
    </View>
    )
}


const styles = StyleSheet.create({
  dummy: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  }
})

export default StaticScreen;