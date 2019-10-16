import React, { FunctionComponent } from "react";
import ThemeText from "./ThemeText";
import ThemeTextProps from "../types/ThemeText";
import ThemeTextStyles from "./ThemeTextStyles";

export const ThemeWarningMessage: FunctionComponent<ThemeTextProps> = ({
  children,
  textStyle
}) => {
  return (
    <ThemeText textStyle={[ThemeTextStyles.warningMessage, textStyle]}>
      {children}
    </ThemeText>
  );
};

export default ThemeWarningMessage;
