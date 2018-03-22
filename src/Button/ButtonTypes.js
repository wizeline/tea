// @flow
import type { Node } from 'react';

export type ButtonProps = {
  // Color
  destructive?: boolean,
  primary?: boolean,
  secondary?: boolean,
  // Size
  big?: boolean,
  normal?: boolean,
  small?: boolean,
  // Other types
  disabled?: boolean,
  icon?: string,
  circle?: boolean,
  text?: string,
  children: [Node, Node],
};
