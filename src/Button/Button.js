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

const getIcon = (icon, invert = true) => (
  <div className="svgContainer">
    <Icon invert={invert} name={icon} />
  </div>
);

const Button = (props: ButtonProps) => {
  const { destructive, icon, round, secondary, text } = props;
  const newText = round ? undefined : text;
  if (secondary) {
    return (
      <SecondaryButton {...props}>
        {getIcon(icon, false)}
        {newText}
      </SecondaryButton>
    );
  }
  if (destructive) {
    return (
      <DestructiveButton {...props}>
        {getIcon(icon)}
        {newText}
      </DestructiveButton>
    );
  }
  return (
    <PrimaryButton {...props}>
      {getIcon(icon)}
      {newText}
    </PrimaryButton>
  );
};

Button.defaultProps = {
  theme: defaultButtonTheme,
};

export default Button;
