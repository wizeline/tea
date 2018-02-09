// @flow

import * as React from 'react';
import ThemeProvider from '../src/ThemeProvider';
import type { Props } from './TestWrapperTypes';

const TestWrapper = (props: Props) => (
  <ThemeProvider>{props.children}</ThemeProvider>
);

export default TestWrapper;
