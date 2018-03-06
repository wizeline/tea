// @flow

import React from 'react';
import PropTypes from 'prop-types';
import type { LinkProps } from './LinkTypes';
import LinkAnchorStyled from './LinkStyled';
import { getLinkPropSupport } from './LinkSupport';
import defaultLinkTheme from '../themes/defaultTheme/components/Link';

const Link = (props: LinkProps) => {
  const { children, linkAnchorStyledProps } = getLinkPropSupport(props);
  return (
    <LinkAnchorStyled {...linkAnchorStyledProps}>{children}</LinkAnchorStyled>
  );
};

Link.propTypes = {
  theme: PropTypes.shape({ textLink: PropTypes.string }),
};

Link.defaultProps = {
  theme: defaultLinkTheme,
};

export default Link;
