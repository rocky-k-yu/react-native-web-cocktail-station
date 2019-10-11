import React, { FunctionComponent } from 'react';
import {StyleSheet} from 'react-native';
import ThemeText from "@emma-services/common/src/shared/components/ThemeText"
import ThemeMessageProps from "../types/ThemeMessage"


const ThemeWarningMessage: FunctionComponent<ThemeMessageProps> = ({children, props}) => { 
    return <ThemeText textStyle={[styles.text, props && props.styles]}>
        {children}
    </ThemeText>
}
const styles = StyleSheet.create({
    text: {
        backgroundColor: 'yellow',
        fontSize: 10
    }
})
export default ThemeWarningMessage