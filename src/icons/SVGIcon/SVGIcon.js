// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import PropTypes from 'prop-types';
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

SVGIcon.propTypes = {
  color: PropTypes.string,
  invert: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.string,
  svgData: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.shape({
    textPrimary: PropTypes.string,
    textPrimaryInvert: PropTypes.string,
    backgroundPrimary: PropTypes.string,
  }),
  top: PropTypes.number,
};

SVGIcon.defaultProps = {
  color: undefined,
  invert: undefined,
  name: undefined,
  theme: defaultIconTheme,
  top: undefined,
  size: undefined,
  svgData: undefined,
};

export default SVGIcon;
