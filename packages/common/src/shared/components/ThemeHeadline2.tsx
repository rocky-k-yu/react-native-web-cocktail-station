import React, { FunctionComponent } from 'react';
import ThemeHeadlineStyles from './ThemeHeadlineStyles'
import ThemeText from "@emma-services/common/src/shared/components/ThemeText"

export const ThemeHeadline2: FunctionComponent = ({children})=>{
    return (
        <ThemeText textStyle={ThemeHeadlineStyles.h2}>
        {children}
        </ThemeText>
    )
}

// const h2Styles = StyleSheet.create({
//     h2 :{
//         fontSize:20,
//         fontWeight:"100"
//     }
// })

export default ThemeHeadline2
