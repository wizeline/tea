// @flow

import React from 'react';
import type { LinkProps } from './LinkTypes';
import LinkAnchorStyled from './LinkStyled';
import { getLinkPropSupport } from './LinkSupport';

const Link = (props: LinkProps) => {
  const { children, linkAnchorStyledProps } = getLinkPropSupport(props);
  return (
    <LinkAnchorStyled
      {...linkAnchorStyledProps}
      href={props.href}
      target={props.target}
      onClick={props.onClick || (() => {})}
    >
      {children}
    </LinkAnchorStyled>
  );
};

export default Link;
