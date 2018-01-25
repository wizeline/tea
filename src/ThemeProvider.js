// @flow

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './themes';
import type { Props } from './ThemeProviderTypes';
import './base.styled';

const PhoenixThemeProvider = (props: Props) => {
  const theme: Object = { ...defaultTheme, ...props.theme };
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default PhoenixThemeProvider;
