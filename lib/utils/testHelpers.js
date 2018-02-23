'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shallowWithTheme = exports.mountExpectToThrow = exports.shallowExpectToMatchSnapShot = exports.shallowExpectInvalid = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _enzyme = require('enzyme');

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

var _ThemeProvider = require('../themes/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _global = global,
    expect = _global.expect;


var shallowExpectInvalid = function shallowExpectInvalid(component) {
  var wrapper = (0, _enzyme.shallow)(component);
  expect((0, _enzymeToJson2.default)(wrapper)).toMatchSnapshot();
  expect((0, _enzymeToJson2.default)(wrapper)).toBe('');
};

var mountExpectToThrow = function mountExpectToThrow(component) {
  expect(function () {
    (0, _enzyme.mount)(component);
  }).toThrow();
};

var shallowExpectToMatchSnapShot = function shallowExpectToMatchSnapShot(component) {
  var wrapper = (0, _enzyme.shallow)(component);
  expect((0, _enzymeToJson2.default)(wrapper)).toMatchSnapshot();
};

var shallowWithTheme = function shallowWithTheme(children, theme) {
  var wrapper = (0, _enzyme.shallow)(React.createElement(
    _ThemeProvider2.default,
    { theme: theme },
    children
  ));
  var instance = wrapper.dive().instance();
  return wrapper.shallow({ context: instance.getChildContext() });
};

exports.shallowExpectInvalid = shallowExpectInvalid;
exports.shallowExpectToMatchSnapShot = shallowExpectToMatchSnapShot;
exports.mountExpectToThrow = mountExpectToThrow;
exports.shallowWithTheme = shallowWithTheme;