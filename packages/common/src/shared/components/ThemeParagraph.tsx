import React, { FunctionComponent } from 'react';
import ThemeText from "@emma-services/common/src/shared/components/ThemeText"

export const ThemeParagraph: FunctionComponent = ({children}) => { 
    return <ThemeText textStyle={{fontFamily:'courier'}}>
        {children}
    </ThemeText>
}
export default ThemeParagraph