import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders correctly when given icon diabled and text props', () => {
    const wrapper = shallow(<Button icon="dots-h" disabled text="Test Text" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when given icon and no text props', () => {
    const wrapper = shallow(<Button icon="dots-h" />);
    expect(wrapper).toHaveStyleRule('min-width', '48px');
  });

  it('renders correctly when given destructive prop', () => {
    const wrapper = shallow(<Button destructive text="Test Text" />);
    expect(wrapper).toHaveStyleRule('background-color', '#ec5659');
    expect(wrapper).toHaveStyleRule('border', '#ec5659');
  });

  it('renders correctly when given secondary prop', () => {
    const wrapper = shallow(<Button secondary text="Test Text" />);
    expect(wrapper).toHaveStyleRule('background-color', '#ffffff');
    expect(wrapper).toHaveStyleRule('border', 'solid 1px #a2abaf');
  });

  it('renders correctly when given big prop', () => {
    const wrapper = shallow(<Button big text="Test Text" />);
    expect(wrapper).toHaveStyleRule('font-size', '1rem');
    expect(wrapper).toHaveStyleRule('min-height', '3rem');
    expect(wrapper).toHaveStyleRule('min-width', '10.25rem');
  });

  it('renders correctly when given small prop', () => {
    const wrapper = shallow(<Button small text="Test Text" />);
    expect(wrapper).toHaveStyleRule('font-size', '0.75rem');
    expect(wrapper).toHaveStyleRule('min-height', '1.4rem');
    expect(wrapper).toHaveStyleRule('min-width', '4.5rem');
  });

  it('renders correctly when given big and round props', () => {
    const wrapper = shallow(<Button big round text="Test Text" />);
    expect(wrapper).toHaveStyleRule('font-size', '1rem');
    expect(wrapper).toHaveStyleRule('height', '2.25rem');
    expect(wrapper).toHaveStyleRule('width', '2.25rem');
  });

  it('renders correctly when given small and round props', () => {
    const wrapper = shallow(<Button small round text="Test Text" />);
    expect(wrapper).toHaveStyleRule('font-size', '0.75rem');
    expect(wrapper).toHaveStyleRule('height', '0.75rem');
    expect(wrapper).toHaveStyleRule('width', '0.75rem');
  });

  it('renders correctly with round prop', () => {
    const wrapper = shallow(<Button round />);
    expect(wrapper).toHaveStyleRule('border-radius', '50%');
  });
});
