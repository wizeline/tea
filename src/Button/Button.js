// @flow

import React from 'react';
import ButtonStyled from './ButtonStyled';
import type { ButtonProps } from './ButtonTypes';

const Button = (props: ButtonProps) => (
  <ButtonStyled>{props.text}</ButtonStyled>
);

export default Button;
