'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SVGIconSvgStyled = exports.SVGIconDivStyled = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  position: relative;\n  height: ', 'px;\n  width: ', 'px;\n  top: ', 'px;\n'], ['\n  display: inline-block;\n  position: relative;\n  height: ', 'px;\n  width: ', 'px;\n  top: ', 'px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  fill: ', ';\n  user-select: none;\n  margin: 0 auto;\n'], ['\n  fill: ', ';\n  user-select: none;\n  margin: 0 auto;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SVGIconConstants = require('./SVGIconConstants');

var _SVGIconConstants2 = _interopRequireDefault(_SVGIconConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint flowtype-errors/enforce-min-coverage: 0 */

var getSVGFill = function getSVGFill(_ref) {
  var iconFillColor = _ref.iconFillColor,
      textPrimaryInvert = _ref.theme.textPrimaryInvert;
  return iconFillColor || textPrimaryInvert;
};

var getContainerTop = function getContainerTop(_ref2) {
  var top = _ref2.top;
  return top || '0';
};
var getContainerSize = function getContainerSize(_ref3) {
  var size = _ref3.size;
  return _SVGIconConstants2.default.sizes[size] || _SVGIconConstants2.default.sizes[_SVGIconConstants2.default.defaultSizeKey];
};

var SVGIconDivStyled = _styledComponents2.default.div(_templateObject, getContainerSize, getContainerSize, getContainerTop);

var SVGIconSvgStyled = _styledComponents2.default.svg(_templateObject2, getSVGFill);

exports.SVGIconDivStyled = SVGIconDivStyled;
exports.SVGIconSvgStyled = SVGIconSvgStyled;