// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';

const shallowExpectInvalid = (component: React.Node) => {
  const wrapper: ShallowWrapper = shallow(component);
  expect(toJson(wrapper)).toMatchSnapshot();
  expect(toJson(wrapper)).toBe('');
};

export default shallowExpectInvalid;
