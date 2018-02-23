'use strict';

var _stringUtils = require('./stringUtils');

describe('stringUtils', function () {
  it('lispToCamelCase functions correctly', function () {
    var lispy = 'hello-my-name-is';
    var camely = (0, _stringUtils.lispToCamelCase)(lispy);
    expect(camely).toBe('helloMyNameIs');
  });
});