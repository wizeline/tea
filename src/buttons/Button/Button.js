// @flow

import React from 'react';
import {
  ButtonStyled,
  IconWrapperStyled,
  TextWrapperStyled,
  getButtonStyle,
} from './Button.styled';
import type { ButtonPropTypes } from './Button.types';

const Button = (props: ButtonPropTypes) => {
  const { iconStyleProps, iconWrapperStyleProps } = getButtonStyle(props);
  const { icon, children } = props;
  const label = children ? (
    <TextWrapperStyled>{children}</TextWrapperStyled>
  ) : null;
  const iconStyled = icon ? (
    <IconWrapperStyled {...iconWrapperStyleProps}>
      {React.cloneElement(icon, iconStyleProps)}
    </IconWrapperStyled>
  ) : null;
  return (
    <ButtonStyled>
      {iconStyled}
      {label}
    </ButtonStyled>
  );
};

export default Button;
