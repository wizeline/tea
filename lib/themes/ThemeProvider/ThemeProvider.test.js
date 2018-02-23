'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TestComponent = require('../../TestComponent');

var _TestComponent2 = _interopRequireDefault(_TestComponent);

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _testHelpers = require('../../utils/testHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ThemeProvider', function () {
  it('Uses default theme when an alternative theme is not provided', function () {
    var component = (0, _testHelpers.shallowWithTheme)(_react2.default.createElement(_TestComponent2.default, null));
    expect(component).toHaveStyleRule('background', _2.default.backgroundPrimary);
  });
  it('Uses alternative theme when provided', function () {
    var altValue = 'alternativeValue';
    var altTheme = { backgroundPrimary: altValue };
    var component = (0, _testHelpers.shallowWithTheme)(_react2.default.createElement(_TestComponent2.default, null), altTheme);
    expect(component).toHaveStyleRule('background', altValue);
  });
});