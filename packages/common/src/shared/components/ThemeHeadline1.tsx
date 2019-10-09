import React, { FunctionComponent } from 'react';
import {Text} from 'react-native-elements'
import ThemeHeadline1Props from '../types/ThemeHeadline1'

export const ThemeHeadline1: FunctionComponent<ThemeHeadline1Props> = ({children})=>{
    return (
        <Text h1>
        {children}
        </Text>
    )
}

export default ThemeHeadline1
