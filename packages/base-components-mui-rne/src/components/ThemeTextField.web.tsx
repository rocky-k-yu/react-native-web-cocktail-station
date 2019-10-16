import React, { FunctionComponent } from "react";
import TextField from "@material-ui/core/TextField";
import ThemeTextFieldProps from "../types/ThemeTextField";

export const ThemeTextField: FunctionComponent<ThemeTextFieldProps> = ({
  label,
  placeholder,
  onChange,
  onBlur
}) => {
  return (
    <TextField
      label={label}
      margin="dense"
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default ThemeTextField;
