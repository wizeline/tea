// @flow

import React from 'react';
import type { LinkProps } from './LinkTypes';
import LinkAnchorStyled from './LinkStyled';
import { getLinkPropSupport } from './LinkSupport';

const Link = (props: LinkProps) => {
  const { children, linkAnchorStyledProps } = getLinkPropSupport(props);
  return (
    <LinkAnchorStyled {...linkAnchorStyledProps}>{children}</LinkAnchorStyled>
  );
};

export default Link;
