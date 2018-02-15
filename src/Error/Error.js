// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import { warn } from '../utils/';
import type { ErrorProps } from './ErrorTypes';
import Text from '../Text';

const missingChildrenPropWarningMessage = '`Error` is missing `children` prop';

const Error = ({ children }: ErrorProps) => {
  if (!children) {
    return warn(missingChildrenPropWarningMessage);
  }
  return <Text error>{children}</Text>;
};

export default Error;
