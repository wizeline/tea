'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pick = require('ramda/src/pick');

var _pick2 = _interopRequireDefault(_pick);

var _pipe = require('ramda/src/pipe');

var _pipe2 = _interopRequireDefault(_pipe);

var _objectUtils = require('../objectUtils');

var _propUtils = require('../propUtils');

var _sizeConstants = require('./sizeConstants');

var _sizeConstants2 = _interopRequireDefault(_sizeConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pickSizes = function pickSizes(props) {
  return (0, _pick2.default)(_sizeConstants2.default, props);
};

var getSize = (0, _pipe2.default)(pickSizes, _objectUtils.getTruthyKey);

var parseSizes = function parseSizes(props) {
  return { size: getSize(props) };
};

var supportSizes = function supportSizes(baseParser) {
  return (0, _propUtils.curryPropParsers)(baseParser, parseSizes);
};

exports.default = supportSizes;