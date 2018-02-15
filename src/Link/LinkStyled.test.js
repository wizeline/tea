import React from 'react';
import LinkAnchorStyled from './LinkStyled';
import { shallowExpectToMatchSnapShot } from '../utils/testHelpers';

describe('LinkAnchorStyled', () => {
  it('renders correctly with defined theme', () => {
    const childrenString = 'hello';
    const props = {
      href: 'http://wizeline.com/',
      priority: 'b100',
      children: childrenString,
      theme: {
        textLink: 'yellow',
      },
    };
    shallowExpectToMatchSnapShot(<LinkAnchorStyled {...props} />);
  });
  it('renders correctly with undefined theme', () => {
    const childrenString = 'hello';
    const props = {
      href: 'http://wizeline.com/',
      priority: 'b100',
      children: childrenString,
    };
    shallowExpectToMatchSnapShot(<LinkAnchorStyled {...props} />);
  });
});
