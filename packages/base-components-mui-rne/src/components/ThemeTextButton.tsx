import React, { FunctionComponent } from 'react';
import { Button } from 'react-native-elements';
import ThemeTextButtonProps from "../types/ThemeTextButton";

export const ThemeTextButton: FunctionComponent<ThemeTextButtonProps> = ({ disabled, onClickOrPress, title }) => {
  return (
    <Button
      title={title}
      disabled={disabled}
      onPress={onClickOrPress}
    />
  )
}

export default ThemeTextButton;
