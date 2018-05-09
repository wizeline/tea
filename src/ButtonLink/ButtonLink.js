// @flow

import React from 'react';
import defaultLinkTheme from '../themes/defaultTheme/components/Link';
import { noop } from '../utils';
import ButtonLinkStyled from './ButtonLinkStyled';
import { getButtonLinkPropSupport } from './ButtonLinkSupport';
import type { ButtonLinkProps } from './ButtonLinkTypes';

const ButtonLink = (props: ButtonLinkProps) => {
  const { linkAnchorStyledProps } = getButtonLinkPropSupport(props);

  return <ButtonLinkStyled {...linkAnchorStyledProps} {...props} />;
};

ButtonLink.defaultProps = {
  theme: defaultLinkTheme,
  onClick: noop,
};

export default ButtonLink;
