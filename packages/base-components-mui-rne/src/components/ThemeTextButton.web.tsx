import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import ThemeTextButtonProps from "../types/ThemeTextButton";

export const ThemeTextButton: FunctionComponent<ThemeTextButtonProps> = ({ disabled, onClickOrPress, title }) => {
  return (
    <Button
      variant="contained"
      disabled={disabled}
      onClick={onClickOrPress}>
      {title}
    </Button>
  )
}

export default ThemeTextButton;
