// @flow

import * as React from 'react';
import { shallow, mount, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import type { Node } from 'react';
import ThemeProvider from '../themes/ThemeProvider';

/* eslint-disable no-use-before-define */
const { expect }: { expect: Function } = global;
/* eslint-enable no-use-before-define */

const shallowExpectInvalid = (component: Node) => {
  const wrapper: ShallowWrapper = shallow(component);
  expect(toJson(wrapper)).toMatchSnapshot();
  expect(toJson(wrapper)).toBe('');
};

const mountExpectToThrow = (component: Node) => {
  expect(() => {
    mount(component);
  }).toThrow();
};

const shallowExpectToMatchSnapShot = (component: Node) => {
  const wrapper: ShallowWrapper = shallow(component);
  expect(toJson(wrapper)).toMatchSnapshot();
};

const shallowWithTheme = (children: Node, theme?: Object) => {
  const wrapper = shallow(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>,
  );
  const instance = wrapper.dive().instance();
  return wrapper.shallow({ context: instance.getChildContext() });
};

export {
  shallowExpectInvalid,
  shallowExpectToMatchSnapShot,
  mountExpectToThrow,
  shallowWithTheme,
};
