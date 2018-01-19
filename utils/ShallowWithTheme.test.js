import React from 'react';
import shallowWithTheme from './ShallowWithTheme';

describe('ShallowWithTheme', () => {
  it('Does contain children', () => {
    const wrapper = shallowWithTheme(<div />);
    expect(wrapper.contains(<div />)).toBeTruthy();
  });
  it('Does not contain children', () => {
    const wrapper = shallowWithTheme();
    expect(wrapper.contains(<div />)).toBeFalsy();
  });
});
