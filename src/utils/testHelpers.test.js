import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const shallowExpectInvalid = component => {
  const wrapper = shallow(component);
  expect(toJson(wrapper)).toMatchSnapshot();
  expect(toJson(wrapper)).toBe('');
};

export default shallowExpectInvalid;
