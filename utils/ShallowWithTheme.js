// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import ThemeProvider from '../src/ThemeProvider';

const shallowWithTheme = (children: ?React.Node, theme?: Object) => {
  const wrapper = shallow(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>,
  );
  const instance = wrapper.dive().instance();
  return wrapper.shallow({ context: instance.getChildContext() });
};

export default shallowWithTheme;
