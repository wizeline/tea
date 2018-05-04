import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CircleIcon from './CircleIcon';
import { shallowExpectInvalid } from '../../utils/testHelpers';

describe('CircleIcon', () => {
  it('renders correctly with undefined size attribute', () => {
    const wrapper = shallow(<CircleIcon name="cross" />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('border-radius', '50%');
  });

  it('renders correctly when given svgData', () => {
    const wrapper = shallow(<CircleIcon svgData={<g />} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly with valid size', () => {
    const wrapperLarge = shallow(<CircleIcon name="cross" large />);
    expect(toJson(wrapperLarge)).toMatchSnapshot();
    expect(wrapperLarge).toHaveStyleRule('border-radius', '50%');

    const wrapperMedium = shallow(<CircleIcon name="cross" medium />);
    expect(toJson(wrapperMedium)).toMatchSnapshot();
    expect(wrapperMedium).toHaveStyleRule('border-radius', '50%');

    const wrapperSmall = shallow(<CircleIcon name="cross" small />);
    expect(toJson(wrapperSmall)).toMatchSnapshot();
    expect(wrapperSmall).toHaveStyleRule('border-radius', '50%');
  });

  it('renders nothing with invalid name', () => {
    shallowExpectInvalid(<CircleIcon name="invalid-name" large />);
  });
});
