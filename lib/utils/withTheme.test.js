'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _withTheme = require('./withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('withTheme', function () {
  it('functions correctly WITH a theme prop', function () {
    var SomeDiv = function SomeDiv() {
      return _react2.default.createElement('div', null);
    };
    var ThemedDiv = (0, _withTheme2.default)(SomeDiv);
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(ThemedDiv, { theme: { textPrimary: 'yellow' } }));
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('functions correctly WITHOUT a theme prop', function () {
    var SomeDiv = function SomeDiv() {
      return _react2.default.createElement('div', null);
    };
    var ThemedDiv = (0, _withTheme2.default)(SomeDiv);
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(ThemedDiv, null));
    expect(wrapper.html()).toMatchSnapshot();
  });
});