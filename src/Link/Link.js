// @flow

import * as React from 'react';
import Text from '../Text';
import type { LinkProps } from './LinkTypes';
import LinkAnchorStyled from './LinkAnchorStyled';
import getPropSupport from './LinkSupport';
import { warn } from '../utils';

const noChildrenPropWarnMessage =
  'An undefined `children` prop was supplied to `<Link />`';

const Link = (props: LinkProps) => {
  const { children, linkAnchorStyledProps, textProps } = getPropSupport(props);
  if (!children) return warn(noChildrenPropWarnMessage);
  return (
    <LinkAnchorStyled {...linkAnchorStyledProps}>
      <Text {...textProps} isLink>
        {children}
      </Text>
    </LinkAnchorStyled>
  );
};

export default Link;
