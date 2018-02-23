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
  svgData?: Element<'svg'>,
  top?: number,
};

export type ContainerSizeProps = {
  size: number,
};

export type ContainerTopProps = {
  top: number,
};
