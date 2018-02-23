'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIconConstants = require('./SVGIconConstants');

var _SVGIconConstants2 = _interopRequireDefault(_SVGIconConstants);

var _div = require('./styled/div');

var _div2 = _interopRequireDefault(_div);

var _svg = require('./styled/svg');

var _svg2 = _interopRequireDefault(_svg);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isSizeInvalid = function isSizeInvalid(size) {
  return size ? !_SVGIconConstants2.default.sizes[size] : false;
};

/* eslint flowtype-errors/enforce-min-coverage: 0 */

var SVGIcon = function SVGIcon(props) {
  var name = props.name,
      size = props.size,
      top = props.top,
      color = props.color,
      svgData = props.svgData;

  var svg = svgData || (0, _data2.default)(name);
  if (!svg || isSizeInvalid(size)) return null;
  var svgViewBox = svg.props.viewBox || _SVGIconConstants2.default.defaultViewBox;
  var svgChildren = svg.props.children;
  return _react2.default.createElement(
    _div2.default,
    { size: size, top: top },
    _react2.default.createElement(
      _svg2.default,
      {
        fill: color,
        viewBox: svgViewBox,
        preserveAspectRatio: _SVGIconConstants2.default.preserveAspectRatio
      },
      svgChildren
    )
  );
};

exports.default = SVGIcon;