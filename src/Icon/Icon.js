// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import constants from './IconConstants';
import type { IconProps } from './IconTypes';
import { IconDivStyled, IconSvgStyled } from './IconStyled';
import getSVG from './data';

const Icon = (props: IconProps) => {
  const { name, size } = props;
  const svg = getSVG(name);
  if (!svg) return null;
  const svgViewBox = svg.props.viewBox || constants.defaultViewBox;
  const svgChildren = svg.props.children;
  return (
    <IconDivStyled size={size}>
      <IconSvgStyled
        iconFillColor={props.color}
        viewBox={svgViewBox}
        preserveAspectRatio={constants.preserveAspectRatio}
      >
        {svgChildren}
      </IconSvgStyled>
    </IconDivStyled>
  );
};

export default Icon;
