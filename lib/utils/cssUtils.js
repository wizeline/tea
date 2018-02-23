'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportOrTheme = exports.supportOr = exports.toPixels = exports.cssProperties = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', ';\n  '], ['\n    ', ';\n  ']);

var _styledComponents = require('styled-components');

var _objectUtils = require('./objectUtils');

var _constants = require('./constants');

var _stringUtils = require('./stringUtils');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var toPixels = function toPixels(val) {
  return val ? val + 'px' : '0px';
};
var cssProperties = (0, _objectUtils.getObjectSupport)(_constants.supportedCssProps, _stringUtils.camelToLispCase);

var supportOr = function supportOr(input, defaultOutput, mapping) {
  for (var _len = arguments.length, outputs = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    outputs[_key - 3] = arguments[_key];
  }

  return function (props) {
    var value = props[input] || defaultOutput;
    var mappedValue = mapping(value);
    var targets = outputs.length ? outputs : [input];
    var generated = targets.map(function (target) {
      return target + ': ' + mappedValue + ';';
    }).join('\n');

    return (0, _styledComponents.css)(_templateObject, generated);
  };
};

var supportOrTheme = function supportOrTheme(input, defaultThemePropName) {
  return function (props) {
    var propertyValue = props[input] || props.theme[defaultThemePropName];
    var generated = [input].map(function (propertyName) {
      return propertyName + ': ' + propertyValue + ';';
    }).join('\n');

    return (0, _styledComponents.css)(_templateObject, generated);
  };
};

exports.cssProperties = cssProperties;
exports.toPixels = toPixels;
exports.supportOr = supportOr;
exports.supportOrTheme = supportOrTheme;