// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import SquareIcon from '../SquareIcon';

import CircleIconProps, { type Props } from './CircleIconProps';
import CircleIconStyled from './CircleIconStyled';
import {
  isSizeValid,
  parseSize,
  getDiameter,
  getSquareIconSize,
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
      <SquareIcon
        name={props.name}
        size={getSquareIconSize(parsedSize)}
        top={getTopOffset(parsedSize)}
      />
    </CircleIconStyled>
  );
};

CircleIcon.defaultProps = CircleIconProps.defaultProps;

export default CircleIcon;
