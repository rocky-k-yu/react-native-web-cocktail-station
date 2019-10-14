import React, { FunctionComponent } from 'react';
import ThemeTextStyles from "./ThemeTextStyles";
import ThemeText from "./ThemeText";
import ThemeTextProps from "../types/ThemeText";

export const ThemeHeadline2: FunctionComponent<ThemeTextProps> = ({children, textStyle})=>{
    return (
        <ThemeText textStyle={[ThemeTextStyles.h2, textStyle]}>
        {children}
        </ThemeText>
    )
}

export default ThemeHeadline2
