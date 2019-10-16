import React, { FunctionComponent } from "react";
import ThemeTextLinkProps from "../types/ThemeTextLink";
import ThemeText from "./ThemeText";
import { Link } from "@emma-services/common/src/shared/components/Routing";
import ThemeTextProps from "../types/ThemeText";

export const ThemeTextLink: FunctionComponent<
  ThemeTextLinkProps & ThemeTextProps
> = ({ toPath, children, textStyle }) => {
  return (
    <Link to={toPath}>
      <ThemeText textStyle={textStyle}>{children}</ThemeText>
    </Link>
  );
};
export default ThemeTextLink;
