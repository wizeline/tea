// @flow

import React from 'react';
import {
  PrimaryButton,
  DestructiveButton,
  SecondaryButton,
} from './ButtonStyled';
import type { ButtonProps } from './ButtonTypes';
import Icon from '../icons/SVGIcon';
import defaultButtonTheme from '../themes/defaultTheme/components/Button';

const getIcon = (icon, invert) => (
  <div className="svgContainer">
    <Icon invert={invert} name={icon} />
  </div>
);

const getButton = (secondary, destructive) => {
  if (secondary) {
    return SecondaryButton;
  }
  if (destructive) {
    return DestructiveButton;
  }
  return PrimaryButton;
};

const Button = (props: ButtonProps) => {
  const { destructive, icon, round, secondary, text } = props;
  const newText = round ? undefined : text;
  const FinalButton = getButton(secondary, destructive);
  return (
    <FinalButton {...props}>
      {getIcon(icon, !secondary)}
      {newText}
    </FinalButton>
  );
};

Button.defaultProps = {
  theme: defaultButtonTheme,
};

export default Button;
