import React from 'react';
import { shallow } from 'enzyme';
import withTheme from './withTheme';

describe('withTheme', () => {
  it('functions correctly without an overriding theme object', () => {
    const Div = () => <div />;
    const ThemedDiv = withTheme(Div);
    const wrapper = shallow(<ThemedDiv />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
