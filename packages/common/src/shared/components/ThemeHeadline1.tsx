import React, { FunctionComponent } from 'react';
import ThemeHeadlineStyles from './ThemeHeadlineStyles'
import ThemeText from "@emma-services/common/src/shared/components/ThemeText"

export const ThemeHeadline1: FunctionComponent = ({children})=>{
    return (
        <ThemeText textStyle={ThemeHeadlineStyles.h1} >
        {children}
        </ThemeText>
    )
}

// const h1Styles = StyleSheet.create({
//     h1 :{
//         fontSize:30,
//         fontWeight:"200"
//     }
// })

export default ThemeHeadline1
