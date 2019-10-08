import React, { FunctionComponent } from 'react';
import { Button } from 'react-native-elements';
import ThemeButtonProps from '../types/ThemeButton'

export const ThemeButton: FunctionComponent<ThemeButtonProps> = ({ disabled, onClickOrPress, title }) => {
  return (
    <Button
      title={title}
      disabled={disabled}
      onPress={onClickOrPress}
    />
  )
}

export default ThemeButton;