'use strict';

var _objectUtils = require('./objectUtils');

describe('coreUtils', function () {
  it('arrayToObject functions correctly', function () {
    var object = (0, _objectUtils.arrayToObject)(['a', 'b']);
    expect(object.a).toBeTruthy();
    expect(object.b).toBeTruthy();
    expect(object.c).toBeFalsy();
  });
  it('supportBooleanNameGroup functions correctly with set boolean flag', function () {
    var groupName = 'priority';
    var names = ['primary', 'secondary', 'danger'];
    var func = (0, _objectUtils.supportBooleanNameGroup)(groupName, names);
    var props = { primary: true };
    var result = func(props);
    expect(result.priority).toBe('primary');
  });
  it('supportBooleanNameGroup functions correctly without set boolean flag', function () {
    var groupName = 'priority';
    var names = ['primary', 'secondary', 'danger'];
    var func = (0, _objectUtils.supportBooleanNameGroup)(groupName, names);
    var props = { warning: true };
    var result = func(props);
    expect(result.priority).not.toBe('primary');
  });
});