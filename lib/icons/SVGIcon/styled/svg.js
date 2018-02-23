'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  fill: ', ';\n  user-select: none;\n  margin: 0 auto;\n'], ['\n  fill: ', ';\n  user-select: none;\n  margin: 0 auto;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SVGIconConstants = require('../SVGIconConstants');

var _SVGIconConstants2 = _interopRequireDefault(_SVGIconConstants);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint flowtype-errors/enforce-min-coverage: 0 */

var defaultFillColorThemeName = _SVGIconConstants2.default.defaultFillColorThemeName;
var fill = _utils.cssProperties.fill;

var fillWithDefault = (0, _utils.propOrTheme)(defaultFillColorThemeName, fill);

var SVGIconSvgStyled = _styledComponents2.default.svg(_templateObject, fillWithDefault);

exports.default = SVGIconSvgStyled;