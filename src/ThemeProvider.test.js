import React from 'react';
import TestComponent from './components/TestComponent';
import defaultTheme from './themes';
import shallowWithTheme from '../utils/ShallowWithTheme';

describe('ThemeProvider', () => {
  it('Uses default theme when an alternative theme is not provided', () => {
    const component = shallowWithTheme(<TestComponent />);
    expect(component).toHaveStyleRule(
      'background',
      defaultTheme.backgroundPrimary,
    );
  });
  it('Uses alternative theme when provided', () => {
    const altValue = 'alternativeValue';
    const altTheme = { backgroundPrimary: altValue };
    const component = shallowWithTheme(<TestComponent />, altTheme);
    expect(component).toHaveStyleRule('background', altValue);
  });
});
