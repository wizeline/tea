'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _TestComponent = require('./TestComponent');

var _TestComponent2 = _interopRequireDefault(_TestComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TestComponent', function () {
  it('Uses provided theme', function () {
    var backgroundPrimaryValue = '#000000';
    var theme = { backgroundPrimary: backgroundPrimaryValue };
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_TestComponent2.default, { theme: theme }));
    expect(component).toHaveStyleRule('background', backgroundPrimaryValue);
  });
});