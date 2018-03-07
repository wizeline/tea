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

const Icon = (iconProps: IconPropTypes) => {
  const { name, round } = iconProps;
  const svg = getSVG(name);
  if (!svg) {
    const warningMessage = getInvalidIconNameWarningMessage(name);
    return warn(warningMessage);
  }
  const childProps = { ...getChildProps(iconProps), svgData: svg };
  return round ? <CircleIcon {...childProps} /> : <SVGIcon {...childProps} />;
};

Icon.defaultProps = {
  theme: defaultIconTheme,
};

export default Icon;
