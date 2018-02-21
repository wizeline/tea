// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import * as React from 'react';
import ThemeProvider from '../ThemeProvider';

const withTheme = (Component: React.ComponentType<Object>) => (
  props: Object,
) => (
  <ThemeProvider>
    <Component {...props} />
  </ThemeProvider>
);

export default withTheme;
