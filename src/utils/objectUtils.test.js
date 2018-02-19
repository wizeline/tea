import { arrayToObject, supportBooleanNameGroup } from './objectUtils';

describe('coreUtils', () => {
  it('arrayToObject functions correctly', () => {
    const object = arrayToObject(['a', 'b']);
    expect(object.a).toBeTruthy();
    expect(object.b).toBeTruthy();
    expect(object.c).toBeFalsy();
  });
  it('supportBooleanNameGroup functions correctly with set boolean flag', () => {
    const groupName = 'priority';
    const names = ['primary', 'secondary', 'danger'];
    const func = supportBooleanNameGroup(groupName, names);
    const props = { primary: true };
    const result = func(props);
    expect(result.priority).toBe('primary');
  });
  it('supportBooleanNameGroup functions correctly without set boolean flag', () => {
    const groupName = 'priority';
    const names = ['primary', 'secondary', 'danger'];
    const func = supportBooleanNameGroup(groupName, names);
    const props = { warning: true };
    const result = func(props);
    expect(result.priority).not.toBe('primary');
  });
});
