import React from 'react';
import renderer from 'react-test-renderer';
import TestComponent from './TestComponent';

describe('TestComponent', () => {
  it('Uses provided theme', () => {
    const backgroundPrimaryValue = '#000000';
    const theme = { backgroundPrimary: backgroundPrimaryValue };
    const component = renderer.create(<TestComponent theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('background', backgroundPrimaryValue);
  });
});
