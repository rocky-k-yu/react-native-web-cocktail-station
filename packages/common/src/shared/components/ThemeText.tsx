import React, { FunctionComponent } from 'react';
import { Text } from 'react-native-elements';
import ThemeTextProps from '../types/ThemeText'

export const ThemeText: FunctionComponent<ThemeTextProps> = ({style, children})=>{
    return(
        <Text style = {style}>
            {children}
        </Text>
    )
}

export default ThemeText