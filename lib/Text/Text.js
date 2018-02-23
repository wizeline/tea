'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextStyled = require('./TextStyled');

var _TextStyled2 = _interopRequireDefault(_TextStyled);

var _TextSupport = require('./TextSupport');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function Text(props) {
  var _getTextPropSupport = (0, _TextSupport.getTextPropSupport)(props),
      textSpanStyledProps = _getTextPropSupport.textSpanStyledProps,
      children = _getTextPropSupport.children;

  return _react2.default.createElement(
    _TextStyled2.default,
    textSpanStyledProps,
    children
  );
};

exports.default = Text;