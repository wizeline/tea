import React from 'react';
import { shallow } from 'enzyme';
import TestComponent from './TestComponent';

describe('TestComponent', () => {
  it('Uses provided theme', () => {
    const backgroundPrimaryValue = '#000000';
    const theme = { backgroundPrimary: backgroundPrimaryValue };
    const component = shallow(<TestComponent theme={theme} />);
    expect(component).toHaveStyleRule('background', backgroundPrimaryValue);
  });
});
