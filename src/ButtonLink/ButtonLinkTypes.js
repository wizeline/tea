// @flow

import * as React from 'react';

export type ButtonLinkProps = {
  b100?: boolean,
  b150?: boolean,
  b50?: boolean,
  children?: React.Node,
  color?: string,
  h300?: boolean,
  href?: string,
  onClick: () => mixed,
  theme: {
    textLink: string,
  },
};
