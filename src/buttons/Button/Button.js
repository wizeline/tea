import React, { Component } from 'react';
import { ButtonStyled, IconWrapperStyled, TextWrapperStyled, getButtonStyle  } from './Button.styled.js';
import { Icon } from '../../icons/Icon';

const Button = (props) => {
  const { buttonStyleProps, iconStyleProps, iconWrapperStyleProps } = getButtonStyle(props);
  const { icon, children, ...otherProps } = props;
  let label = null;
  if (children) {
    label = <TextWrapperStyled>{ children }</TextWrapperStyled>;
  }
  let iconStyled = null;
  if (icon) {
    iconStyled = React.cloneElement(icon, iconStyleProps);
  }
  return (
    <ButtonStyled {...buttonStyleProps} >
    {
      iconStyled &&
      <IconWrapperStyled {...iconWrapperStyleProps} >
        { iconStyled }
      </IconWrapperStyled>
    }
    { label }
    </ButtonStyled>
  );
};

export { Button };
