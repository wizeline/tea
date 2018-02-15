// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import type { ErrorProps } from './ErrorTypes';
import Text from '../Text';

const Error = ({ children }: ErrorProps) => <Text error>{children}</Text>;

export default Error;
