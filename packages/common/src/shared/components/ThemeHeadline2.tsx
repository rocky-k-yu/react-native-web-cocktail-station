import React, { FunctionComponent } from 'react';
import {Text} from 'react-native-elements'
import ThemeHeadline2Props from '../types/ThemeHeadline2'

export const ThemeHeadline2: FunctionComponent<ThemeHeadline2Props> = ({children})=>{
    return (
        <Text h2>
        {children}
        </Text>
    )
}

export default ThemeHeadline2
