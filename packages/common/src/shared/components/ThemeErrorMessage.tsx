import React, { FunctionComponent } from 'react';
import {StyleSheet} from 'react-native';
import ThemeText from "@emma-services/common/src/shared/components/ThemeText"
import ThemeMessageProps from "../types/ThemeMessage"


const ThemeErrorMessage: FunctionComponent<ThemeMessageProps> = ({children, props}) => { 
    return <ThemeText textStyle={[styles.text, props.styles]}>
        {children}
    </ThemeText>
}
const styles = StyleSheet.create({
    text: {
        backgroundColor: 'red',
        color: 'white'
    }
})
export default ThemeErrorMessage