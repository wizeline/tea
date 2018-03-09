// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import type { ErrorProps } from './ErrorTypes';
import Text from '../Text';
import defaultErrorTheme from '../themes/defaultTheme/components/Error';

const Error = ({ children }: ErrorProps) => <Text error>{children}</Text>;

Error.defaultProps = {
  theme: defaultErrorTheme,
};

export default Error;
