// @flow

import React from 'react';
import CircleIcon from '../CircleIcon/CircleIcon';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { IconPropTypes } from './IconPropTypes';
import getChildProps from './IconHelpers';
import getSVG from '../SVGIcon/data';
import { warn } from '../../utils';
import defaultIconTheme from '../../themes/defaultTheme/components/Icon';

const getInvalidIconNameWarningMessage = (name: string) =>
  `An invalid \`name\` prop with value \`${name}\` was supplied to <Icon />.`;

const getSizeProps = ({ size }) => {
  switch (size) {
    case 'xsmall':
      return { xmall: true };
    case 'medium':
      return { medium: true };
    case 'large':
      return { large: true };
    case 'xlarge':
      return { xlarge: true };
    default:
      return { small: true };
  }
};

const Icon = (iconProps: IconPropTypes) => {
  const { name, round } = iconProps;
  const svg = getSVG(name);
  if (!svg) {
    const warningMessage = getInvalidIconNameWarningMessage(name);
    return warn(warningMessage);
  }
  const childProps = { ...getChildProps(iconProps), svgData: svg };
  const sizeProps = getSizeProps(childProps);
  return round ? (
    <CircleIcon {...childProps} {...sizeProps} />
  ) : (
    <SVGIcon {...childProps} {...sizeProps} />
  );
};

Icon.defaultProps = {
  theme: defaultIconTheme,
};

export default Icon;
