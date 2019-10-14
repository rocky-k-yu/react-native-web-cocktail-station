import React, { FunctionComponent } from 'react';
import ThemeText from "./ThemeText";
import ThemeTextProps from "../types/ThemeText";
import ThemeTextStyles from "./ThemeTextStyles";

export const ThemeParagraph: FunctionComponent<ThemeTextProps> = ({children, textStyle}) => { 
    return <ThemeText textStyle={[ThemeTextStyles.paragraph, textStyle]}>
        {children}
    </ThemeText>
}
export default ThemeParagraph
