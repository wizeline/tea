'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var multipleTruthyKeyError = 'ERROR: Multiple keys associated with a truthy value, offending keys:';

var supportedPropNames = ['size', 'name', 'color', 'background'];
var supportedCssProps = ['background', 'fill', 'height', 'top', 'width'];

exports.multipleTruthyKeyError = multipleTruthyKeyError;
exports.supportedCssProps = supportedCssProps;
exports.supportedPropNames = supportedPropNames;