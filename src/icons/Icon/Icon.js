// @flow

import React from 'react';
import CircleIcon from '../CircleIcon/CircleIcon';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { IconPropTypes } from './IconPropTypes';
import getChildProps from './IconHelpers';
import getSVG from '../SVGIcon/data';
import { warn } from '../../utils';

const getInvalidIconNameWarningMessage = (name: string) =>
  `An invalid \`name\` prop \`${name}\` was supplied to <Icon />.`;

const Icon = (iconProps: IconPropTypes) => {
  const { name, round } = iconProps;
  const childProps = getChildProps(iconProps);
  const svg = getSVG(name);
  if (!svg) {
    const warningMessage = getInvalidIconNameWarningMessage(name);
    warn(warningMessage);
    return null;
  }
  return round ? <CircleIcon {...childProps} /> : <SVGIcon {...childProps} />;
};

export default Icon;
