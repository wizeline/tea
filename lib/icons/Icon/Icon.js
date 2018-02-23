'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CircleIcon = require('../CircleIcon/CircleIcon');

var _CircleIcon2 = _interopRequireDefault(_CircleIcon);

var _SVGIcon = require('../SVGIcon/SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

var _IconHelpers = require('./IconHelpers');

var _IconHelpers2 = _interopRequireDefault(_IconHelpers);

var _data = require('../SVGIcon/data');

var _data2 = _interopRequireDefault(_data);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getInvalidIconNameWarningMessage = function getInvalidIconNameWarningMessage(name) {
  return 'An invalid `name` prop with value `' + name + '` was supplied to <Icon />.';
};

var Icon = function Icon(iconProps) {
  var name = iconProps.name,
      round = iconProps.round;

  var svg = (0, _data2.default)(name);
  if (!svg) {
    var warningMessage = getInvalidIconNameWarningMessage(name);
    return (0, _utils.warn)(warningMessage);
  }
  var childProps = _extends({}, (0, _IconHelpers2.default)(iconProps), { svgData: svg });
  return round ? _react2.default.createElement(_CircleIcon2.default, childProps) : _react2.default.createElement(_SVGIcon2.default, childProps);
};

exports.default = Icon;