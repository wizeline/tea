// @flow

import type { Element } from 'react';

export type SVGFillProps = {
  iconFillColor: string,
  theme: {
    textPrimaryInvert: string,
  },
};

export type SVGIconProps = {
  color?: string,
  name?: string,
  size?: string,
  top?: number,
  svgData?: Element<*>,
  invert?: boolean,
  xmall?: boolean,
  small?: boolean,
  medium?: boolean,
  large?: boolean,
  xlarge?: boolean,
};

export type ContainerSizeProps = {
  size: number,
};

export type ContainerTopProps = {
  top: number,
};
