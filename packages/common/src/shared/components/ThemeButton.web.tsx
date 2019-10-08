import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import ThemeButtonProps from '../types/ThemeButton';

export const ThemeButton: FunctionComponent<ThemeButtonProps> = ({ disabled, onClickOrPress, title }) => {
  return (
    <Button
      variant="contained"
      disabled={disabled}
      onClick={onClickOrPress}>
      {title}
    </Button>
  )
}

export default ThemeButton;