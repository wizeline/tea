// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import type { ErrorProps } from './ErrorTypes';
import Text from '../Text';
import defaultErrorTheme from '../themes/defaultTheme/components/Error';

const Error = ({ children }: ErrorProps) => <Text error>{children}</Text>;

Error.propTypes = {
  theme: PropTypes.shape({ textError: PropTypes.string }),
  children: PropTypes.string,
};

Error.defaultProps = {
  theme: defaultErrorTheme,
  children: '',
};

export default Error;
