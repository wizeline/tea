import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGIcon from './SVGIcon';
import SVGIconDivStyled from './styled/div';
import SVGIconSvgStyled from './styled/svg';
import { shallowExpectInvalid } from '../../utils/testHelpers';

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
    shallowExpectInvalid(<SVGIcon name="InvalidIconName" />);
  });
  it('renders nothing with invalid name and invalid size', () => {
    shallowExpectInvalid(<SVGIcon name="InvalidIconName" size="InvalidSize" />);
  });
  it('renders nothing with an undefined name and undefined size', () => {
    shallowExpectInvalid(<SVGIcon />);
  });
});

describe('SVGIconSvgStyled', () => {
  it('renders correctly without any defined attributes', () => {
    const wrapper = shallow(<SVGIconSvgStyled />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders correctly with defined color', () => {
    const wrapper = shallow(<SVGIconSvgStyled fill="red" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('SVGIconDivStyled', () => {
  it('renders correctly with defined valid container size', () => {
    const wrapper = shallow(<SVGIconDivStyled size="large" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders correctly with defined invalid container size', () => {
    const wrapper = shallow(<SVGIconDivStyled size="invalidSize" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders correctly with defined top', () => {
    const wrapper = shallow(<SVGIconDivStyled top={10} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
