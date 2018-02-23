'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testHelpers = require('./testHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ShallowWithTheme', function () {
  it('works correctly with a child element', function () {
    var wrapper = (0, _testHelpers.shallowWithTheme)(_react2.default.createElement('div', null));
    expect(wrapper.contains(_react2.default.createElement('div', null))).toBeTruthy();
  });
  it('works correctly without a child element', function () {
    var wrapper = (0, _testHelpers.shallowWithTheme)();
    expect(wrapper.contains(_react2.default.createElement('div', null))).toBeFalsy();
  });
});