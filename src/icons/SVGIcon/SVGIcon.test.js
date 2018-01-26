import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGIcon from './SVGIcon';
import { SVGIconSvgStyled } from './SVGIconStyled';

describe('SVGIcon', () => {
  it('renders correctly with an undefined size and a valid name that references an SVG with a defined viewBox', () => {
    const wrapper = shallow(<SVGIcon name="cross" />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('top', '0px');
  });
  it('renders correctly with a valid size and a valid name that references an SVG without a defined viewBox', () => {
    const wrapper = shallow(
      <SVGIcon name="missing-view-box" size="large" top={20} />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('top', '20px');
  });
  it('renders nothing with an invalid name and undefined size attribute', () => {
    const wrapper = shallow(<SVGIcon name="InvalidIconName" />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(toJson(wrapper)).toBe('');
  });
  it('renders nothing with invalid name and invalid size', () => {
    const wrapper = shallow(
      <SVGIcon name="InvalidIconName" size="InvalidSize" />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(toJson(wrapper)).toBe('');
  });
  it('renders nothing with an undefined name and undefined size', () => {
    const wrapper = shallow(<SVGIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(toJson(wrapper)).toBe('');
  });
});

describe('SVGIconSvgStyled', () => {
  it('renders correctly without any defined attributes', () => {
    const wrapper = shallow(<SVGIconSvgStyled />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
