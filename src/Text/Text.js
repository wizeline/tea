// @flow

import React from 'react';
import TextSpanStyled from './TextStyled';
import type { TextProps } from './TextTypes';
import { getPropSupport } from './TextSupport';

const Text = (props: TextProps) => {
  const { textSpanStyledProps, children } = getPropSupport(props);
  return <TextSpanStyled {...textSpanStyledProps}>{children}</TextSpanStyled>;
};

export default Text;
