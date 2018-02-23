'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LinkStyled = require('./LinkStyled');

var _LinkStyled2 = _interopRequireDefault(_LinkStyled);

var _LinkSupport = require('./LinkSupport');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(props) {
  var _getLinkPropSupport = (0, _LinkSupport.getLinkPropSupport)(props),
      children = _getLinkPropSupport.children,
      linkAnchorStyledProps = _getLinkPropSupport.linkAnchorStyledProps;

  return _react2.default.createElement(
    _LinkStyled2.default,
    linkAnchorStyledProps,
    children
  );
};

exports.default = Link;