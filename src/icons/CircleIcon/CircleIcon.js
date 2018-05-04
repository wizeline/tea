// @flow

import React from 'react';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { CircleIconProps } from './CircleIconTypes';
import CircleIconStyled from './CircleIconStyled';
import constants from './CircleIconConstants';
import parseSize from './CircleIconUtils';
import getSVG from '../SVGIcon/data';
import defaultIconTheme from '../../themes/defaultTheme/components/Icon';

const getTopOffset = (parsedSize: string): number => constants.tops[parsedSize];

const getSVGIconSize = (parsedSize: string): string =>
  constants.sizeReductions[parsedSize];

const getSVGIconColor = (color: ?string) => color || undefined;

const CircleIcon = (props: CircleIconProps) => {
  const { name, background, color, svgData, small, medium, large } = props;
  const svg = svgData || getSVG(name);
  if (!svg) return null;
  const parsedSize = parseSize(props);
  return (
    <CircleIconStyled
      small={small}
      medium={medium}
      large={large}
      background={background}
    >
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

CircleIcon.defaultProps = {
  theme: defaultIconTheme,
};

export default CircleIcon;
