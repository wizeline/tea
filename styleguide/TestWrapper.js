// @flow

import * as React from 'react';
import colors from '../src/themes/styles/colors';
import ThemeProvider from '../src/themes/ThemeProvider';
import type { Props } from './TestWrapperTypes';

const altTheme = {
  textPrimaryInvert: colors.white,
};

const TestWrapper = (props: Props) => (
  <ThemeProvider theme={altTheme}>{props.children}</ThemeProvider>
);

export default TestWrapper;
