// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';

import constants from './SquareIconConstants';
import type { SquareIconProps } from './SquareIconTypes';
import { SquareIconDivStyled, SquareIconSvgStyled } from './SquareIconStyled';
import getSVG from './data';

const SquareIcon = (props: SquareIconProps) => {
  const { name, size } = props;
  const svg = getSVG(name);
  if (!svg) return null;
  const svgViewBox = svg.props.viewBox || constants.defaultViewBox;
  const svgChildren = svg.props.children;
  return (
    <SquareIconDivStyled size={size}>
      <SquareIconSvgStyled
        iconFillColor={props.color}
        viewBox={svgViewBox}
        preserveAspectRatio={constants.preserveAspectRatio}
      >
        {svgChildren}
      </SquareIconSvgStyled>
    </SquareIconDivStyled>
  );
};

export default SquareIcon;
