// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import SVGIcon from '../SVGIcon';

import CircleIconProps, { type Props } from './CircleIconProps';
import CircleIconStyled from './CircleIconStyled';
import {
  isSizeValid,
  parseSize,
  getDiameter,
  getSVGIconSize,
  getTopOffset,
} from './CircleIconHelpers';

const CircleIcon = (props: Props) => {
  if (!isSizeValid(props.size)) {
    return null;
  }
  const parsedSize: string = parseSize(props.size);
  return (
    <CircleIconStyled
      diameter={getDiameter(parsedSize)}
      background={props.background}
    >
      <SVGIcon
        name={props.name}
        size={getSVGIconSize(parsedSize)}
        top={getTopOffset(parsedSize)}
      />
    </CircleIconStyled>
  );
};

CircleIcon.defaultProps = CircleIconProps.defaultProps;

export default CircleIcon;
