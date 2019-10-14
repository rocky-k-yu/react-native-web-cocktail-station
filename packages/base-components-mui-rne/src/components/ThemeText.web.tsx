import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import ThemeTextProps from "../types/ThemeText";

export const ThemeText: FunctionComponent<ThemeTextProps> = ({children, textStyle})=>{
    return(
        <Text style={textStyle}>
            {children}
        </Text>
    )
}

export default ThemeText
