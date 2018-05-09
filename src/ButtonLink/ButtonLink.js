// @flow

import React from 'react';
import { getButtonLinkPropSupport } from './ButtonLinkSupport';
import ButtonLinkStyled from './ButtonLinkStyled';
import defaultLinkTheme from '../themes/defaultTheme/components/Link';
import type { ButtonLinkProps } from './ButtonLinkTypes';

const ButtonLink = (props: ButtonLinkProps) => {
  const { linkAnchorStyledProps } = getButtonLinkPropSupport(props);

  return <ButtonLinkStyled {...linkAnchorStyledProps} {...props} />;
};

ButtonLink.defaultProps = {
  theme: defaultLinkTheme,
};

export default ButtonLink;
