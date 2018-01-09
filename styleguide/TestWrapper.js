// @flow

import React from 'react';
import ThemeProvider from '../src/ThemeProvider';
import TestComponent from '../src/components/TestComponent';

const customTheme = {
  backgroundPrimary: 'green',
};

const TestWrapper = () => (
  <ThemeProvider theme={customTheme}>
    <TestComponent />
  </ThemeProvider>
);

export default TestWrapper;
