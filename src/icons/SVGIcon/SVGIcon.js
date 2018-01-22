// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';

import constants from './SVGIconConstants';
import type { SVGIconProps } from './SVGIconTypes';
import { SVGIconDivStyled, SVGIconSvgStyled } from './SVGIconStyled';
import getSVG from './data';

const SVGIcon = (props: SVGIconProps) => {
  const { name, size, top, color } = props;
  const svg = getSVG(name);
  if (!svg) return null;
  const svgViewBox = svg.props.viewBox || constants.defaultViewBox;
  const svgChildren = svg.props.children;
  return (
    <SVGIconDivStyled size={size} top={top}>
      <SVGIconSvgStyled
        iconFillColor={color}
        viewBox={svgViewBox}
        preserveAspectRatio={constants.preserveAspectRatio}
      >
        {svgChildren}
      </SVGIconSvgStyled>
    </SVGIconDivStyled>
  );
};

export default SVGIcon;
