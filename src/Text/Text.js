// @flow

import React from 'react';
import TextSpanStyled from './TextStyled';
import constants from './TextConstants';
import type { TextProps } from './TextTypes';
import singleTruthyKey from './TextUtils';

const Text = (props: TextProps) => {
  const {
    children,
    color,
    h600,
    h500,
    h400,
    h300,
    h200,
    b150,
    b100,
    b50,
  } = props;
  const activePreset = singleTruthyKey({
    h600,
    h500,
    h400,
    h300,
    h200,
    b150,
    b100,
    b50,
  });
  const preset = activePreset || constants.defaultPreset;
  return (
    <TextSpanStyled preset={preset} color={color}>
      {children}
    </TextSpanStyled>
  );
};

export default Text;
