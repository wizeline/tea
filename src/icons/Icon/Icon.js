// @flow

import React from 'react';
import CircleIcon from '../CircleIcon/CircleIcon';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { IconPropTypes } from './IconPropTypes';
import getChildProps from './IconHelpers';

const Icon = (iconProps: IconPropTypes) => {
  const { round } = iconProps;
  const childProps = getChildProps(iconProps);
  return round ? <CircleIcon {...childProps} /> : <SVGIcon {...childProps} />;
};

export default Icon;
