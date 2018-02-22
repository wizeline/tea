// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import * as React from 'react';
import { withTheme, ThemeProvider } from 'styled-components';
import defaultTheme from '../themes/defaultTheme';

const withPhoenixTheme = (Component: React.ComponentType<Object>) =>
  withTheme((props: Object) => {
    const theme = { ...defaultTheme, ...props.theme };
    return (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    );
  });

export default withPhoenixTheme;
