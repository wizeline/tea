import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error', () => {
  it('functions correctly with children', () => {
    const component = <Error>Some error text</Error>;
    const wrapper = shallow(component);
    expect(wrapper.html()).toBeTruthy();
  });
  it('functions correctly without children', () => {
    const component = <Error />;
    const wrapper = shallow(component);
    expect(wrapper.html()).toBeFalsy();
  });
});
