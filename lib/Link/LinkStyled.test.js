'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LinkStyled = require('./LinkStyled');

var _LinkStyled2 = _interopRequireDefault(_LinkStyled);

var _testHelpers = require('../utils/testHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('LinkAnchorStyled', function () {
  it('renders correctly with defined theme', function () {
    var childrenString = 'hello';
    var props = {
      href: 'http://wizeline.com/',
      priority: 'b100',
      children: childrenString,
      theme: {
        textLink: 'yellow'
      }
    };
    (0, _testHelpers.shallowExpectToMatchSnapShot)(_react2.default.createElement(_LinkStyled2.default, props));
  });
  it('renders correctly with undefined theme', function () {
    var childrenString = 'hello';
    var props = {
      href: 'http://wizeline.com/',
      priority: 'b100',
      children: childrenString
    };
    (0, _testHelpers.shallowExpectToMatchSnapShot)(_react2.default.createElement(_LinkStyled2.default, props));
  });
});