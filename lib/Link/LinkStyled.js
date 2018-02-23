'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-decoration: none;\n  ', ';\n'], ['\n  text-decoration: none;\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _LinkSupport = require('./LinkSupport');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint flowtype-errors/enforce-min-coverage: 0 */

var LinkAnchorStyled = _styledComponents2.default.a(_templateObject, _LinkSupport.getLinkStyleSupport);

exports.default = LinkAnchorStyled;