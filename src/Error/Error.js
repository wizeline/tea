// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import type { ErrorProps } from './ErrorTypes';
import Text from '../Text';

const Error = ({ children }: ErrorProps) =>
  children ? <Text error>{children}</Text> : null;

export default Error;
