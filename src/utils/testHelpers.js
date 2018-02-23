// @flow

import * as React from 'react';
import { shallow, mount, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import ThemeProvider from '../themes/ThemeProvider';

const { expect } = global;

const shallowExpectInvalid = (component: React.Node) => {
  const wrapper: ShallowWrapper = shallow(component);
  expect(toJson(wrapper)).toMatchSnapshot();
  expect(toJson(wrapper)).toBe('');
};

const mountExpectToThrow = (component: React.Node) => {
  expect(() => {
    mount(component);
  }).toThrow();
};

const shallowExpectToMatchSnapShot = (component: React.Node) => {
  const wrapper: ShallowWrapper = shallow(component);
  expect(toJson(wrapper)).toMatchSnapshot();
};

const shallowWithTheme = (children: ?React.Node, theme?: Object) => {
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
