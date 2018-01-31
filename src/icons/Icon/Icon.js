// @flow

import React from 'react';
import { pick, pipe, getTruthyKey } from '../../utils/coreUtils';
import CircleIcon from '../CircleIcon/CircleIcon';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { IconPropTypes } from './IconTypes';
import propKeys from './IconConstants';

const pickSizes = ({ xsmall, small, medium, large, xlarge }) => ({
  xsmall,
  small,
  medium,
  large,
  xlarge,
});

const Icon = (iconProps: IconPropTypes) => {
  const { NAME, ROUND, COLOR, BACKGROUND } = propKeys;
  const { name } = pick(iconProps, NAME);
  const { round } = pick(iconProps, ROUND);
  const size: ?string = pipe(iconProps, pickSizes, getTruthyKey);
  const colors = pick(iconProps, COLOR, BACKGROUND);
  const childProps = { name, size, ...colors };
  return round ? <CircleIcon {...childProps} /> : <SVGIcon {...childProps} />;
};

export default Icon;
