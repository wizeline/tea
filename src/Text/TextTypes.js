// @flow

import type { Node } from 'react';

export type TextProps = {
  children?: Node,
  color?: string,
  h600?: boolean,
  h500?: boolean,
  h400?: boolean,
  h300?: boolean,
  h200?: boolean,
  b150?: boolean,
  b100?: boolean,
  b50?: boolean,
  subtitle?: boolean,
  error?: boolean,
  short?: boolean,
  long?: boolean,
};

export type ColorProps = {
  color: string,
  theme: {
    textPrimary: string,
  },
};

export type StyleProps = {
  priority: string,
};
