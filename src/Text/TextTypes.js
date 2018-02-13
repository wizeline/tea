// @flow

import * as React from 'react';

export type TextProps = {
  children?: React.Node,
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
  isLink?: boolean,
};

export type ColorProps = {
  color: string,
  isLink: boolean,
  theme: {
    textPrimary: string,
    textLink: string,
  },
};

export type ChildrenRelatedProps = {
  h200?: boolean,
  subtitle?: boolean,
  children?: React.Node,
};

export type StyleProps = {
  priority: string,
  color: string,
  theme: Object,
  isLink: boolean,
};
