'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint flowtype-errors/enforce-min-coverage: 0 */

var _themeBackground = require('./themeBackground');

var _themeBackground2 = _interopRequireDefault(_themeBackground);

var _themeText = require('./themeText');

var _themeText2 = _interopRequireDefault(_themeText);

var _themeBorder = require('./themeBorder');

var _themeBorder2 = _interopRequireDefault(_themeBorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _themeBackground2.default, _themeText2.default, _themeBorder2.default);