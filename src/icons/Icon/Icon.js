// @flow

import React from 'react';
import CircleIcon from '../CircleIcon/CircleIcon';
import SVGIcon from '../SVGIcon/SVGIcon';
import singleTruthyKey from './IconUtils';
import type { IconProps } from './IconTypes';

const Icon = (props: IconProps) => {
  const {
    // SVG
    name,
    // shape
    round,
    // sizes
    xsmall,
    small,
    medium,
    large,
    xlarge,
    // colors
    color,
    background,
  } = props;
  const sizes = { xsmall, small, medium, large, xlarge };
  const colorProps = { color, background };
  return round ? (
    <CircleIcon name={name} size={singleTruthyKey(sizes)} {...colorProps} />
  ) : (
    <SVGIcon name={name} size={singleTruthyKey(sizes)} {...colorProps} />
  );
};

export default Icon;
