'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propOrTheme = exports.propNames = exports.curryPropParsers = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('./constants');

var _objectUtils = require('./objectUtils');

var propNames = (0, _objectUtils.getObjectSupport)(_constants.supportedPropNames);

var propOrTheme = function propOrTheme(themeName, propName) {
  return function (props) {
    return props[propName] ? props[propName] : props.theme[themeName];
  };
};

var curryPropParsers = function curryPropParsers() {
  for (var _len = arguments.length, parsers = Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }

  return function (props) {
    var toObject = function toObject(acc, parsedProps) {
      return _extends({}, acc, parsedProps);
    };
    return parsers.map(function (parser) {
      return parser(props);
    }).reduce(toObject, {});
  };
};

exports.curryPropParsers = curryPropParsers;
exports.propNames = propNames;
exports.propOrTheme = propOrTheme;