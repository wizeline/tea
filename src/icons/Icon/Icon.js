// @flow

import React from 'react';
import CircleIcon from '../CircleIcon/CircleIcon';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { IconPropTypes } from './IconPropTypes';
import getChildProps from './IconHelpers';
import getSVG from '../SVGIcon/data';

const Icon = (iconProps: IconPropTypes) => {
  const { name, round } = iconProps;
  const childProps = getChildProps(iconProps);
  const svg = getSVG(name);
  if (!svg) return null;
  return round ? <CircleIcon {...childProps} /> : <SVGIcon {...childProps} />;
};

export default Icon;
