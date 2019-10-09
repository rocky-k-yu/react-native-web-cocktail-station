import React, { FunctionComponent } from 'react';
import ThemeHeadline2Props from '../types/ThemeHeadline2'

export const ThemeHeadline2: FunctionComponent<ThemeHeadline2Props> = ({children})=>{
    return (
        <h2>
        {children}
        </h2>
    )
}

export default ThemeHeadline2