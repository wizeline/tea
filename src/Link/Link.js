// @flow

import * as React from 'react';
import Text from '../Text';
import type { LinkProps } from './LinkTypes';
import LinkAnchorStyled from './LinkAnchorStyled';
import getPropSupport from './LinkSupport';

const Link = (props: LinkProps) => {
  const { children, linkAnchorStyledProps, textProps } = getPropSupport(props);
  return (
    <LinkAnchorStyled {...linkAnchorStyledProps}>
      <Text {...textProps} isLink>
        {children}
      </Text>
    </LinkAnchorStyled>
  );
};

export default Link;
