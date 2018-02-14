import React from 'react';
import Link from './Link';
import { shallowExpectToMatchSnapShot } from '../utils/testHelpers';

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
});
