import React, { FunctionComponent } from 'react';
import ThemeTextLinkProps from '../types/ThemeTextLink';
import ThemeText from './ThemeText'
import {Link} from './Routing'


export const ThemeTextLink: FunctionComponent<ThemeTextLinkProps> = ({to, children}) => {
    return (
      <Link to={to}><ThemeText>{children}</ThemeText></Link>
    )
  }
export default ThemeTextLink;