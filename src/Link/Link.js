// @flow

import React from 'react';
import PropTypes from 'prop-types';
import type { LinkProps } from './LinkTypes';
import LinkAnchorStyled from './LinkStyled';
import { getLinkPropSupport } from './LinkSupport';
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

Link.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
};

Link.defaultProps = {
  onClick: noop,
  href: '#',
  target: '',
};

export default Link;
