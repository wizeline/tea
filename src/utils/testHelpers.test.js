import React from 'react';
import { shallowWithTheme } from './testHelpers';

describe('ShallowWithTheme', () => {
  it('works correctly with a child element', () => {
    const wrapper = shallowWithTheme(<div />);
    expect(wrapper.contains(<div />)).toBeTruthy();
  });
  it('works correctly without a child element', () => {
    const wrapper = shallowWithTheme();
    expect(wrapper.contains(<div />)).toBeFalsy();
  });
});
