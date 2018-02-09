// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import type { SVGIconProps } from './SVGIconTypes';
import constants from './SVGIconConstants';
import SVGIconDivStyled from './styled/div';
import SVGIconSvgStyled from './styled/svg';
import getSVG from './data';

const isSizeInvalid = (size: ?string): boolean =>
  size ? !constants.sizes[size] : false;

const SVGIcon = (props: SVGIconProps) => {
  const { name, size, top, color, svgData } = props;
  const svg = svgData || getSVG(name);
  if (!svg || isSizeInvalid(size)) return null;
  const svgViewBox = svg.props.viewBox || constants.defaultViewBox;
  const svgChildren = svg.props.children;
  return (
    <SVGIconDivStyled size={size} top={top}>
      <SVGIconSvgStyled
        fill={color}
        viewBox={svgViewBox}
        preserveAspectRatio={constants.preserveAspectRatio}
      >
        {svgChildren}
      </SVGIconSvgStyled>
    </SVGIconDivStyled>
  );
};

export default SVGIcon;
