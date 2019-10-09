import React, { FunctionComponent } from 'react';
import ThemeHeadline1Props from '../types/ThemeHeadline1'

export const ThemeHeadline1: FunctionComponent<ThemeHeadline1Props> = ({children})=>{
    return (
        <h1>
            {children}
        </h1>
    )
}

export default ThemeHeadline1