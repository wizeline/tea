// @flow

import React from 'react';
import {
  PrimaryButton,
  DestructiveButton,
  SecondaryButton,
} from './ButtonStyled';
import type { ButtonProps } from './ButtonTypes';
import defaultThemeBackground from '../themes/styles/backgrounds';
import defaultThemeBorder from '../themes/styles/borders';
import defaultThemeText from '../themes/defaultTheme/components/Text';
import Icon from '../icons/SVGIcon';

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
  theme: {
    ...defaultThemeBackground,
    ...defaultThemeBorder,
    ...defaultThemeText,
  },
};

export default Button;
