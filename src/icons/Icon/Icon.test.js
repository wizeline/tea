import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Icon from './Icon';
import {
  shallowExpectInvalid,
  shallowExpectToMatchSnapShot,
  mountExpectToThrow,
} from '../../utils/testHelpers';

describe('Icon', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Icon name="cross" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders correctly without defined size or background', () => {
    shallowExpectToMatchSnapShot(<Icon round name="cross" />);
  });
  it('renders correctly with round, large and background', () => {
    shallowExpectToMatchSnapShot(
      <Icon round large name="cross" background="yellow" />,
    );
  });
  it('renders correctly with round, large and undefined background', () => {
    shallowExpectToMatchSnapShot(<Icon round large name="cross" />);
  });
  it('renders correctly, invalid size ignored', () => {
    shallowExpectToMatchSnapShot(<Icon round xlarge name="cross" />);
  });
  it('throws an error with multiple truthy sizes', () => {
    mountExpectToThrow(<Icon round xlarge large name="cross" />);
  });
  it('renders nothing with an invalid name and undefined size attribute', () => {
    shallowExpectInvalid(<Icon name="InvalidIconName" />);
  });
  it('renders nothing with invalid name and invalid size', () => {
    shallowExpectInvalid(<Icon name="InvalidIconName" size="InvalidSize" />);
  });
  it('renders nothing with an undefined name and undefined size', () => {
    shallowExpectInvalid(<Icon />);
  });
  it('renders nothing with an invalid name and undefined size attribute', () => {
    shallowExpectInvalid(<Icon round name="InvalidIconName" />);
  });
  it('renders nothing with round, invalid name and invalid size', () => {
    shallowExpectInvalid(
      <Icon round name="InvalidIconName" size="InvalidSize" />,
    );
  });
});
