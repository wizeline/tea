import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Icon } from '../icons/Icon';
import ButtonLink from './ButtonLink';

describe('ButtonLink', () => {
  it('functions correctly with children', () => {
    const childrenString = 'hello';
    const props = {
      b150: true,
      children: childrenString,
    };
    const wrapper = shallow(<ButtonLink {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('functions correctly without children', () => {
    const props = {
      b150: true,
    };
    const wrapper = shallow(<ButtonLink {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('functions correctly with svg child', () => {
    const props = {
      b150: true,
    };
    const wrapper = shallow(
      <ButtonLink {...props}>
        <Icon name="add-item" xsmall />
      </ButtonLink>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('functions correctly with custom color', () => {
    const props = {
      color: 'red',
    };
    const wrapper = shallow(<ButtonLink {...props} />);
    expect(wrapper).toHaveStyleRule('color', 'red');
  });

  it('calls onClick function', () => {
    const onClickMocked = jest.fn();
    const props = {
      onClick: onClickMocked,
    };
    const buttonLink = shallow(<ButtonLink {...props} />);
    buttonLink.simulate('click');
    expect(onClickMocked.mock.calls.length).toEqual(1);
  });

  it('has default onClick function', () => {
    const props = {};
    const buttonLink = shallow(<ButtonLink {...props} />);
    buttonLink.simulate('click');
    expect(buttonLink.props().onClick).toBeDefined();
  });
});
