// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import type { SVGIconProps } from './SVGIconTypes';
import constants from './SVGIconConstants';
import SVGIconDivStyled from './styled/div';
import SVGIconSvgStyled from './styled/svg';
import getSVG from './data';
import defaultIconTheme from '../../themes/defaultTheme/components/Icon';

const isSizeInvalid = (size: ?string): boolean =>
  size ? !constants.sizes[size] : false;

const SVGIcon = (props: SVGIconProps) => {
  const { name, size, top, color, svgData, invert } = props;
  const fillColor = invert && !color ? undefined : color;
  const svg = svgData || getSVG(name);
  if (!svg || isSizeInvalid(size)) return null;
  const svgViewBox = svg.props.viewBox || constants.defaultViewBox;
  const svgChildren = svg.props.children;
  return (
    <SVGIconDivStyled size={size} top={top}>
      <SVGIconSvgStyled
        invert={invert}
        fill={fillColor}
        viewBox={svgViewBox}
        preserveAspectRatio={constants.preserveAspectRatio}
      >
        {svgChildren}
      </SVGIconSvgStyled>
    </SVGIconDivStyled>
  );
};

SVGIcon.defaultProps = {
  theme: defaultIconTheme,
};

export default SVGIcon;
