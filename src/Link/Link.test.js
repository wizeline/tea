import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Link from './Link';
import { shallowExpectToMatchSnapShot } from '../utils/testHelpers';

const node = document.createElement('div');

const createLinkNodeWithHref = href => {
  ReactDOM.render(<Link href={href} />, node);

  return node.querySelector('a');
};

describe('Link', () => {
  it('functions correctly with children', () => {
    const childrenString = 'hello';
    const props = {
      href: 'http://wizeline.com/',
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
  it('has the correct href', () => {
    const linkNode = createLinkNodeWithHref('foo');
    expect(linkNode.getAttribute('href')).toEqual('foo');
  });
});
