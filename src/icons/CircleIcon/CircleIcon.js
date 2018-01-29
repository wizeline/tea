// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import SVGIcon from '../SVGIcon';
import type { CircleIconProps } from './CircleIconTypes';
import CircleIconStyled from './CircleIconStyled';
import constants from './CircleIconConstants';
import parseSize from './CircleIconUtils';

const isSizeInvalid = (size: ?string): boolean =>
  size ? !constants.circleDiameters[size] : false;

const getTopOffset = (parsedSize: string): number => constants.tops[parsedSize];

const getSVGIconSize = (parsedSize: string): string =>
  constants.sizeReductions[parsedSize];

const CircleIcon = ({ name, size, background, color }: CircleIconProps) => {
  if (isSizeInvalid(size)) return null;
  const parsedSize = parseSize(size);
  return (
    <CircleIconStyled size={parsedSize} background={background}>
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
