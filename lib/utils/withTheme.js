'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint flowtype-errors/enforce-min-coverage: 0 */

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _isEmpty = require('ramda/src/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _styledComponents = require('styled-components');

var _defaultTheme = require('../themes/defaultTheme');

var _defaultTheme2 = _interopRequireDefault(_defaultTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var hasThemeProp = function hasThemeProp(props) {
  return props.theme && !(0, _isEmpty2.default)(props.theme);
};

var withPhoenixTheme = function withPhoenixTheme(Component) {
  var result = function result(props) {
    if (hasThemeProp(props)) {
      return React.createElement(Component, props);
    }
    return React.createElement(
      _styledComponents.ThemeProvider,
      { theme: _extends({}, _defaultTheme2.default) },
      React.createElement(Component, props)
    );
  };
  return result;
};

exports.default = withPhoenixTheme;