'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinkStyleSupport = exports.getLinkPropSupport = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    ', ';\n    ', ';\n  '], ['\n    ', ';\n    ', ';\n  ']);

var _styledComponents = require('styled-components');

var _utils = require('../utils');

var _TextSupport = require('../Text/TextSupport');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var priorityPropName = 'priority';
var supportedPriorities = ['b50', 'b100', 'b150', 'h300'];
var defaultPriority = 'b100';

var getLinkPropSupport = function getLinkPropSupport(props) {
  var children = props.children,
      href = props.href,
      otherProps = _objectWithoutProperties(props, ['children', 'href']);

  var priority = (0, _utils.supportBooleanNameGroup)(priorityPropName, supportedPriorities, defaultPriority)(otherProps);
  var linkAnchorStyledProps = _extends({}, priority, {
    href: href
  });
  return {
    children: children,
    linkAnchorStyledProps: linkAnchorStyledProps
  };
};

var getLinkStyleSupport = function getLinkStyleSupport(props) {
  var color = props.theme ? props.theme.textLink : null;
  var colorOverride = color ? 'color: ' + color + ';' : '';
  return (0, _styledComponents.css)(_templateObject, _TextSupport.getTextStyleSupport, colorOverride);
};

exports.getLinkPropSupport = getLinkPropSupport;
exports.getLinkStyleSupport = getLinkStyleSupport;