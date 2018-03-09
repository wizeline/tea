// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { CircleIconProps } from './CircleIconTypes';
import CircleIconStyled from './CircleIconStyled';
import constants from './CircleIconConstants';
import parseSize from './CircleIconUtils';
import getSVG from '../SVGIcon/data';
import defaultIconTheme from '../../themes/defaultTheme/components/Icon';

const isSizeInvalid = (size: ?string): boolean =>
  size ? !constants.circleDiameters[size] : false;

const getTopOffset = (parsedSize: string): number => constants.tops[parsedSize];

const getSVGIconSize = (parsedSize: string): string =>
  constants.sizeReductions[parsedSize];

const getSVGIconColor = (color: ?string) => color || undefined;

const CircleIcon = (props: CircleIconProps) => {
  const { name, size, background, color, svgData } = props;
  const svg = svgData || getSVG(name);
  if (!svg || isSizeInvalid(size)) return null;
  const parsedSize = parseSize(size);
  return (
    <CircleIconStyled size={parsedSize} background={background}>
      <SVGIcon
        invert
        color={getSVGIconColor(color)}
        size={getSVGIconSize(parsedSize)}
        top={getTopOffset(parsedSize)}
        svgData={svg}
      />
    </CircleIconStyled>
  );
};

CircleIcon.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  svgData: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.shape({
    textPrimary: PropTypes.string,
    textPrimaryInvert: PropTypes.string,
    backgroundPrimary: PropTypes.string,
  }),
};

CircleIcon.defaultProps = {
  background: undefined,
  color: undefined,
  name: undefined,
  theme: defaultIconTheme,
  size: undefined,
  svgData: undefined,
};

export default CircleIcon;
