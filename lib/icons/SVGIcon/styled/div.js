'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  position: relative;\n'], ['\n  display: inline-block;\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ';\n  ', ';\n'], ['\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SVGIconConstants = require('../SVGIconConstants');

var _SVGIconConstants2 = _interopRequireDefault(_SVGIconConstants);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint flowtype-errors/enforce-min-coverage: 0 */

var SVGIconDivBase = _styledComponents2.default.div(_templateObject);

var sizes = _SVGIconConstants2.default.sizes,
    defaultSizeKey = _SVGIconConstants2.default.defaultSizeKey,
    defaultTop = _SVGIconConstants2.default.defaultTop;
var top = _utils.cssProperties.top,
    width = _utils.cssProperties.width,
    height = _utils.cssProperties.height;
var size = _utils.propNames.size;


var topSupport = (0, _utils.supportOr)(top, defaultTop, _utils.toPixels);
var sizeMapping = function sizeMapping(sizeName) {
  return (0, _utils.toPixels)(sizes[sizeName] || sizes[defaultSizeKey]);
};

var sizeSupport = (0, _utils.supportOr)(size, defaultSizeKey, sizeMapping, width, height);

var SVGIconDivStyled = SVGIconDivBase.extend(_templateObject2, sizeSupport, topSupport);

exports.default = SVGIconDivStyled;