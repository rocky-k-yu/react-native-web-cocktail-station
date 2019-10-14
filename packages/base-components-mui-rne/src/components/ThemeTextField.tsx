import React, { FunctionComponent } from 'react';
import { Input } from 'react-native-elements';
import ThemeTextFieldProps from "../types/ThemeTextField";

export const ThemeTextField: FunctionComponent<ThemeTextFieldProps> = ({label, placeholder, onChange, onBlur})=>{
    return(
        <Input
        label={label}
        placeholder={placeholder}
        onChangeText={onChange}
        onBlur={onBlur}
      />
    )
}

export default ThemeTextField
