import React, { FunctionComponent } from "react";
import ThemeText from "./ThemeText";
import ThemeTextStyles from "./ThemeTextStyles";
import ThemeTextProps from "../types/ThemeText";

export const ThemeErrorMessage: FunctionComponent<ThemeTextProps> = ({
  children,
  textStyle
}) => {
  return (
    <ThemeText textStyle={[ThemeTextStyles.errorMessage, textStyle]}>
      {children}
    </ThemeText>
  );
};

export default ThemeErrorMessage;
