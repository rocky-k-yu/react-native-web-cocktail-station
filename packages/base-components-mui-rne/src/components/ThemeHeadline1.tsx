import React, { FunctionComponent } from "react";
import ThemeTextStyles from "./ThemeTextStyles";
import ThemeText from "./ThemeText";
import ThemeTextProps from "../types/ThemeText";

export const ThemeHeadline1: FunctionComponent<ThemeTextProps> = ({
  children,
  textStyle
}) => {
  return (
    <ThemeText textStyle={[ThemeTextStyles.h1, textStyle]}>
      {children}
    </ThemeText>
  );
};

export default ThemeHeadline1;
