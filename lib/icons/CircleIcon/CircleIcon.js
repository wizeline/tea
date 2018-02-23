'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon/SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

var _CircleIconStyled = require('./CircleIconStyled');

var _CircleIconStyled2 = _interopRequireDefault(_CircleIconStyled);

var _CircleIconConstants = require('./CircleIconConstants');

var _CircleIconConstants2 = _interopRequireDefault(_CircleIconConstants);

var _CircleIconUtils = require('./CircleIconUtils');

var _CircleIconUtils2 = _interopRequireDefault(_CircleIconUtils);

var _data = require('../SVGIcon/data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint flowtype-errors/enforce-min-coverage: 0 */

var isSizeInvalid = function isSizeInvalid(size) {
  return size ? !_CircleIconConstants2.default.circleDiameters[size] : false;
};

var getTopOffset = function getTopOffset(parsedSize) {
  return _CircleIconConstants2.default.tops[parsedSize];
};

var getSVGIconSize = function getSVGIconSize(parsedSize) {
  return _CircleIconConstants2.default.sizeReductions[parsedSize];
};

var getSVGIconColor = function getSVGIconColor(color) {
  return color || _CircleIconConstants2.default.defaultSVGIconColor;
};

var CircleIcon = function CircleIcon(props) {
  var name = props.name,
      size = props.size,
      background = props.background,
      color = props.color,
      svgData = props.svgData;

  var svg = svgData || (0, _data2.default)(name);
  if (!svg || isSizeInvalid(size)) return null;
  var parsedSize = (0, _CircleIconUtils2.default)(size);
  return _react2.default.createElement(
    _CircleIconStyled2.default,
    { size: parsedSize, background: background },
    _react2.default.createElement(_SVGIcon2.default, {
      color: getSVGIconColor(color),
      size: getSVGIconSize(parsedSize),
      top: getTopOffset(parsedSize),
      svgData: svg
    })
  );
};

exports.default = CircleIcon;