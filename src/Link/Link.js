// @flow

import * as React from 'react';
import type { LinkProps } from './LinkTypes';
import LinkAnchorStyled from './LinkStyled';
import { getLinkPropSupport } from './LinkSupport';
import { warn } from '../utils';

const noChildrenPropWarnMessage =
  'An undefined `children` prop was supplied to `<Link />`';

const Link = (props: LinkProps) => {
  const { children, linkAnchorStyledProps } = getLinkPropSupport(props);
  if (!children) return warn(noChildrenPropWarnMessage);
  return (
    <LinkAnchorStyled {...linkAnchorStyledProps}>{children}</LinkAnchorStyled>
  );
};

export default Link;
