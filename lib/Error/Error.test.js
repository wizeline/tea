'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Error = require('./Error');

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Error', function () {
  it('functions correctly with children', function () {
    var component = _react2.default.createElement(
      _Error2.default,
      null,
      'Some error text'
    );
    var wrapper = (0, _enzyme.shallow)(component);
    expect(wrapper.html()).toBeTruthy();
  });
  it('functions correctly without children', function () {
    var component = _react2.default.createElement(_Error2.default, null);
    var wrapper = (0, _enzyme.shallow)(component);
    expect(wrapper.html()).toBeTruthy();
  });
});