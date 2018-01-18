// @flow

import * as React from 'react';
import ThemeProvider from '../src/ThemeProvider';

const customTheme = {
  backgroundPrimary: 'green',
};

type Props = {
  children: ?React.Node,
};

const TestWrapper = (props: Props) => (
  <ThemeProvider theme={customTheme}>{props.children}</ThemeProvider>
);

export default TestWrapper;
