'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextStyleSupport = exports.getTextPropSupport = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n        text-transform: uppercase;\n      '], ['\n        text-transform: uppercase;\n      ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        color: ', ';\n      '], ['\n        color: ', ';\n      ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n  '], ['\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n  ']);

var _styledComponents = require('styled-components');

var _pick = require('ramda/src/pick');

var _pick2 = _interopRequireDefault(_pick);

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var priorityGroupName = 'priority';
var supportedHeadings = ['h600', 'h500', 'h400', 'h300', 'h200'];
var supportedBodies = ['b150', 'b100', 'b50'];
var priorityBooleanAttributeGroup = [].concat(supportedHeadings, supportedBodies, ['error', 'short', 'long', 'subtitle']);

var themeMapping = {
  body: 'textBody',
  error: 'textError',
  heading: 'textHeading',
  link: 'textLink',
  subtitle: 'textSubtitle'
};

var getPriorityPropObject = (0, _utils.supportBooleanNameGroup)(priorityGroupName, priorityBooleanAttributeGroup);

var supportedUpperCasedPriorities = ['h200', 'subtitle'];
var upperCasedPriorities = (0, _utils.arrayToObject)(supportedUpperCasedPriorities);

var getTextTransformSupport = function getTextTransformSupport(priorityName) {
  var isUpperCased = upperCasedPriorities[priorityName];
  return isUpperCased ? (0, _styledComponents.css)(_templateObject) : null;
};

var getTextPropSupport = function getTextPropSupport(props) {
  var priority = getPriorityPropObject(props);
  var children = props.children,
      color = props.color;

  var textSpanStyledProps = _extends({
    color: color
  }, priority);
  return {
    textSpanStyledProps: textSpanStyledProps,
    children: children
  };
};

var headingsObject = (0, _utils.arrayToObject)(supportedHeadings);
var bodiesObject = (0, _utils.arrayToObject)(supportedBodies);

var getThemeSupport = function getThemeSupport(props, priorityKey) {
  var themeLookup = void 0;
  if (bodiesObject[priorityKey]) {
    themeLookup = 'body';
  } else if (headingsObject[priorityKey]) {
    themeLookup = 'heading';
  } else {
    themeLookup = priorityKey;
  }

  var themeColor = props.theme[themeMapping[themeLookup]];
  return themeColor ? (0, _styledComponents.css)(_templateObject2, themeColor) : null;
};

var isHeading = function isHeading(priorityName) {
  return headingsObject[priorityName];
};
var heading = _css2.default.heading;

var getHeadingSupport = function getHeadingSupport(priorityName) {
  return isHeading(priorityName) ? heading : null;
};

var getColorSupport = function getColorSupport(props) {
  var color = props.color;

  return color ? (0, _styledComponents.css)(_templateObject2, color) : null;
};

var getTextStyleSupport = function getTextStyleSupport(props) {
  var priorityName = props[priorityGroupName];
  var picked = (0, _pick2.default)(priorityBooleanAttributeGroup, _css2.default);
  var baseSupport = Object(picked[priorityName]);
  var themeSupport = getThemeSupport(props, priorityName);
  var headingSupport = getHeadingSupport(priorityName);
  var colorSupport = getColorSupport(props);
  var textTransformSupport = getTextTransformSupport(priorityName);
  return (0, _styledComponents.css)(_templateObject3, baseSupport, themeSupport, headingSupport, colorSupport, textTransformSupport);
};

exports.getTextPropSupport = getTextPropSupport;
exports.getTextStyleSupport = getTextStyleSupport;