// @flow

import * as React from 'react';

type Theme = {
  [key: string]: string,
};

type Props = {
  theme: Theme,
  children?: React.Node,
};

export type { Theme, Props };
