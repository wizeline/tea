// @flow

import React from 'react';
import TextSpanStyled from './TextStyled';
import type { TextProps } from './TextTypes';
import { getTextPropSupport } from './TextSupport';

const Text = (props: TextProps) => {
  const { textSpanStyledProps, children } = getTextPropSupport(props);
  return <TextSpanStyled {...textSpanStyledProps}>{children}</TextSpanStyled>;
};

export default Text;
