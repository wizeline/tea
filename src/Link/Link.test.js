import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';
import { shallowExpectToMatchSnapShot } from '../utils/testHelpers';

describe('Link', () => {
  it('functions correctly with children', () => {
    const childrenString = 'hello';
    const props = {
      href: 'http://wizeline.com/',
      target: '_blank',
      b150: true,
      children: childrenString,
    };
    shallowExpectToMatchSnapShot(<Link {...props} />);
  });

  it('functions correctly without children', () => {
    const props = {
      href: 'http://wizeline.com/',
      b150: true,
    };
    shallowExpectToMatchSnapShot(<Link {...props} />);
  });

  it('calls onClick function', () => {
    const onClickMocked = jest.fn();
    const props = {
      onClick: onClickMocked,
    };
    const link = shallow(<Link {...props} />);
    link.simulate('click');
    expect(onClickMocked.mock.calls.length).toEqual(1);
  });

  it('has default onClick function', () => {
    const props = {};
    const link = shallow(<Link {...props} />);
    link.simulate('click');
    expect(link.props().onClick).toBeTruthy();
  });
});
