// @flow

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './themes';

type Theme = {
  [key: string]: string,
};

type Props = {
  theme: Theme,
  children?: React.Node,
};

const PhoenixThemeProvider = (props: Props) => {
  const theme: Theme = { ...defaultTheme, ...props.theme };
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

PhoenixThemeProvider.defaultProps = {
  children: null,
};

export default PhoenixThemeProvider;
