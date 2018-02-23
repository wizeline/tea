import React from 'react';
import { mount } from 'enzyme';
import withTheme from './withTheme';

describe('withTheme', () => {
  it('functions correctly WITH a theme prop', () => {
    const SomeDiv = () => <div />;
    const ThemedDiv = withTheme(SomeDiv);
    const wrapper = mount(<ThemedDiv theme={{ textPrimary: 'yellow' }} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('functions correctly WITHOUT a theme prop', () => {
    const SomeDiv = () => <div />;
    const ThemedDiv = withTheme(SomeDiv);
    const wrapper = mount(<ThemedDiv />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
