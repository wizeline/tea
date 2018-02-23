'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint flowtype-errors/enforce-min-coverage: 0 */

var Error = function Error(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _Text2.default,
    { error: true },
    children
  );
};

exports.default = Error;