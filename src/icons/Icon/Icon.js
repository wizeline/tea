// @flow

import React from 'react';
import { pick, pipe, getTruthyKey } from '../../utils/coreUtils';
import CircleIcon from '../CircleIcon/CircleIcon';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { IconProps } from './IconTypes';
import attributes from './IconConstants';

const pickSizes = ({ xsmall, small, medium, large, xlarge }) => ({
  xsmall,
  small,
  medium,
  large,
  xlarge,
});

const Icon = (props: IconProps) => {
  const { NAME, ROUND, COLOR, BACKGROUND } = attributes;
  const { name } = pick(props, NAME);
  const { round } = pick(props, ROUND);
  const size: ?string = pipe(props, pickSizes, getTruthyKey);
  const colors = pick(props, COLOR, BACKGROUND);
  const iconProps = { name, size, ...colors };
  return round ? <CircleIcon {...iconProps} /> : <SVGIcon {...iconProps} />;
};

export default Icon;
