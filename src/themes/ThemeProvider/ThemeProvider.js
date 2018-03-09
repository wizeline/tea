// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../';
import type { Props } from './ThemeProviderTypes';

const PhoenixThemeProvider = (props: Props) => {
  const theme: Object = { ...defaultTheme, ...props.theme };
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default PhoenixThemeProvider;
