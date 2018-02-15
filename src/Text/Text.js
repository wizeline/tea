// @flow

import React from 'react';
import TextSpanStyled from './TextStyled';
import type { TextProps } from './TextTypes';
import { getPropSupport } from './TextSupport';

const Text = (props: TextProps) => {
  const { priority, children } = getPropSupport(props);
  return <TextSpanStyled {...priority}>{children}</TextSpanStyled>;
};

export default Text;
