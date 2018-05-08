// @flow

import React from 'react';
import { getLinkPropSupport } from '../Link/LinkSupport';
import ButtonLinkStyled from './ButtonLinkStyled';
import defaultLinkTheme from '../themes/defaultTheme/components/Link';
import type { ButtonLinkProps } from './ButtonLinkTypes';

const ButtonLink = (props: ButtonLinkProps) => {
  const { linkAnchorStyledProps } = getLinkPropSupport(props);

  return <ButtonLinkStyled {...linkAnchorStyledProps} {...props} />;
};

ButtonLink.defaultProps = {
  theme: defaultLinkTheme,
};

export default ButtonLink;
