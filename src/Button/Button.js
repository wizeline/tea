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
  const newText = props.round ? undefined : props.text;
  if (props.secondary) {
    return (
      <SecondaryButton {...props}>
        {getIcon(props.icon, false)}
        {newText}
      </SecondaryButton>
    );
  }
  if (props.destructive) {
    return (
      <DestructiveButton {...props}>
        {getIcon(props.icon)}
        {newText}
      </DestructiveButton>
    );
  }
  return (
    <PrimaryButton {...props}>
      {getIcon(props.icon)}
      {newText}
    </PrimaryButton>
  );
};

Button.defaultProps = {
  theme: defaultButtonTheme,
};

export default Button;
