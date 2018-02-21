// @flow

import type { Element } from 'react';

export type CircleIconProps = {
  name: string,
  size?: string,
  color?: string,
  background?: string,
  svgData?: Element<'svg'>,
};

export type DiameterProps = {
  size: string,
};

export type BackgroundProps = {
  background: string,
  theme: {
    backgroundPrimary: string,
  },
};
