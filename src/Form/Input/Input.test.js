import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Input from './Input';

describe('Input', () => {
  it('functions correctly without props', () => {
    const wrapper = shallow(<Input />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('functions correctly with props', () => {
    const props = {
      placeholder: 'Placeholder',
      label: 'Text input label',
      errorMessage: 'Text input error message',
      error: true,
      type: 'password',
    };
    const wrapper = shallow(<Input {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('has the correct size', () => {
    const props = {
      placeholder: 'Placeholder',
      label: 'Text input label',
      errorMessage: 'Text input error message',
      size: 15,
    };
    const wrapper = mount(<Input {...props} />);
    expect(wrapper.find('input').prop('size')).toBe(15);
  });

  it('shows the error message when necessary', () => {
    const props = {
      placeholder: 'Placeholder',
      label: 'Text input label',
      errorMessage: 'Text input error message',
      error: true,
    };
    const wrapper = mount(<Input {...props} />);
    expect(wrapper.find('label').last()).toHaveStyleRule(
      'visibility',
      'visible',
    );
  });

  it('functions correctly with Icon', () => {
    const props = {
      placeholder: 'Placeholder',
      label: 'Text input label',
      errorMessage: 'Text input error message',
      error: true,
      icon: 'dots-h',
    };
    const wrapper = mount(<Input {...props} />);
    expect(wrapper.find('input')).toHaveStyleRule('padding', '0 1rem 0 2.5rem');
  });

  it('calls onChange function', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Input onChange={onChange} />);
    wrapper.find('input').simulate('change');
    expect(onChange.mock.calls.length).toEqual(1);
  });
});
