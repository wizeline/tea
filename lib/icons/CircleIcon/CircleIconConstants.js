'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('../../themes/defaultTheme/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constants = {
  defaultSize: 'small',
  defaultSVGIconColor: _colors2.default.white,
  circleDiameters: {
    small: 32,
    medium: 48,
    large: 56
  },
  tops: {
    small: 8,
    medium: 12,
    large: 12
  },
  sizeReductions: {
    small: 'xsmall',
    medium: 'small',
    large: 'medium'
  }
};

exports.default = constants;