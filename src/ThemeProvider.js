// @flow

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './themes';
import type { Theme, Props } from './ThemeProviderTypes';

const PhoenixThemeProvider = (props: Props) => {
  const theme: Theme = { ...defaultTheme, ...props.theme };
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default PhoenixThemeProvider;
