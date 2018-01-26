import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CircleIcon from './CircleIcon';

describe('CircleIcon', () => {
  it('renders correctly with undefined size attribute', () => {
    const wrapper = shallow(<CircleIcon name="cross" />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('border-radius', '50%');
  });
  it('renders correctly with valid size', () => {
    const wrapper = shallow(<CircleIcon name="cross" size="large" />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('border-radius', '50%');
  });
  it('renders nothing with invalid size', () => {
    const wrapper = shallow(<CircleIcon name="cross" size="xlarge" />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(toJson(wrapper)).toBe('');
  });
});
