import React, { FunctionComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import ThemeTextFieldProps from '../types/ThemeTextField'

export const ThemeTextField: FunctionComponent<ThemeTextFieldProps> = ({label, margin, placeholder, onChange, onBlur})=>{
    return(
        <TextField
        label={label}
        margin={margin}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    )
}

export default ThemeTextField