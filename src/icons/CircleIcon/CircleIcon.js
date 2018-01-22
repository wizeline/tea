// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import SVGIcon from '../SVGIcon';
import type { CircleIconProps } from './CircleIconTypes';
import CircleIconStyled from './CircleIconStyled';
import {
  isSizeValid,
  parseSize,
  getDiameter,
  getSVGIconSize,
  getTopOffset,
} from './CircleIconConstants';

const CircleIcon = ({ name, size, background, color }: CircleIconProps) => {
  if (!isSizeValid(size)) {
    return null;
  }
  const parsedSize: string = parseSize(size);
  return (
    <CircleIconStyled
      diameter={getDiameter(parsedSize)}
      background={background}
    >
      <SVGIcon
        name={name}
        color={color}
        size={getSVGIconSize(parsedSize)}
        top={getTopOffset(parsedSize)}
      />
    </CircleIconStyled>
  );
};

export default CircleIcon;
