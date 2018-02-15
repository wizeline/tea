// @flow

import type { Node } from 'react';

export type CircleIconProps = {
  name?: string,
  size?: string,
  color?: string,
  background?: string,
  svgData?: Node,
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
