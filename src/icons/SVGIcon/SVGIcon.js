// @flow

import React from 'react';
import type { SVGIconProps } from './SVGIconTypes';
import constants from './SVGIconConstants';
import SVGIconDivStyled from './styled/div';
import SVGIconSvgStyled from './styled/svg';
import getSVG from './data';
import defaultIconTheme from '../../themes/defaultTheme/components/Icon';

const SVGIcon = (props: SVGIconProps) => {
  const {
    name,
    top,
    color,
    svgData,
    invert,
    xmall,
    small,
    medium,
    large,
    xlarge,
  } = props;
  const fillColor = invert && !color ? undefined : color;
  const svg = svgData || getSVG(name);
  if (!svg) return null;
  const svgViewBox = svg.props.viewBox || constants.defaultViewBox;
  const svgChildren = svg.props.children;
  return (
    <SVGIconDivStyled
      top={top}
      xmall={xmall}
      small={small}
      medium={medium}
      large={large}
      xlarge={xlarge}
    >
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
