'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint flowtype-errors/enforce-min-coverage: 0 */

var _pick = require('ramda/src/pick');

var _pick2 = _interopRequireDefault(_pick);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = _utils.propNames.color,
    background = _utils.propNames.background;


var getChildProps = function getChildProps(iconProps) {
  var colorSupport = (0, _pick2.default)([color, background], iconProps);
  return _extends({}, colorSupport);
};

var enhanced = (0, _utils.supportSizes)(getChildProps);

exports.default = enhanced;