'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  height: 100px;\n  width: 100px;\n'], ['\n  background: ', ';\n  height: 100px;\n  width: 100px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint flowtype-errors/enforce-min-coverage: 0 */

var TestComponent = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.backgroundPrimary;
});

exports.default = TestComponent;