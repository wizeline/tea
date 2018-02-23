'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  text-align: center;\n  border-radius: 50%;\n'], ['\n  display: inline-block;\n  text-align: center;\n  border-radius: 50%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ';\n  ', ';\n'], ['\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _CircleIconConstants = require('./CircleIconConstants');

var _CircleIconConstants2 = _interopRequireDefault(_CircleIconConstants);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint flowtype-errors/enforce-min-coverage: 0 */

var circleDiameters = _CircleIconConstants2.default.circleDiameters,
    defaultSize = _CircleIconConstants2.default.defaultSize;
var size = _utils.propNames.size,
    background = _utils.propNames.background;
var width = _utils.cssProperties.width,
    height = _utils.cssProperties.height;


var sizeMapping = function sizeMapping(sizeName) {
  return (0, _utils.toPixels)(circleDiameters[sizeName]);
};
var sizeSupport = (0, _utils.supportOr)(size, circleDiameters[defaultSize], sizeMapping, width, height);

var backgroundSupport = (0, _utils.supportOrTheme)(background, 'backgroundPrimary');

var CircleIconBase = _styledComponents2.default.div(_templateObject);

var CircleIconStyled = CircleIconBase.extend(_templateObject2, sizeSupport, backgroundSupport);

exports.default = CircleIconStyled;