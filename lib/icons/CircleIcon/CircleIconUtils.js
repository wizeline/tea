'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CircleIconConstants = require('./CircleIconConstants');

var _CircleIconConstants2 = _interopRequireDefault(_CircleIconConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseSize = function parseSize(size) {
  return size || _CircleIconConstants2.default.defaultSize;
};

exports.default = parseSize;