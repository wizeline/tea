// @flow

import React from 'react';
import type { LinkProps } from './LinkTypes';
import LinkAnchorStyled from './LinkStyled';
import { getLinkPropSupport } from './LinkSupport';
import defaultLinkTheme from '../themes/defaultTheme/components/Link';
import { noop } from '../utils';

const Link = (props: LinkProps) => {
  const { children, linkAnchorStyledProps } = getLinkPropSupport(props);
  return (
    <LinkAnchorStyled
      {...linkAnchorStyledProps}
      {...props}
      href={props.href}
      target={props.target}
      onClick={props.onClick}
    >
      {children}
    </LinkAnchorStyled>
  );
};

Link.defaultProps = {
  theme: defaultLinkTheme,
  onClick: noop,
  href: '#',
  target: '',
};

export default Link;
