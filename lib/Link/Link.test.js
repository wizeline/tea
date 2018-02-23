'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _testHelpers = require('../utils/testHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Link', function () {
  it('functions correctly with children', function () {
    var childrenString = 'hello';
    var props = {
      href: 'http://wizeline.com/',
      b150: true,
      children: childrenString
    };
    (0, _testHelpers.shallowExpectToMatchSnapShot)(_react2.default.createElement(_Link2.default, props));
  });
  it('functions correctly without children', function () {
    var props = {
      href: 'http://wizeline.com/',
      b150: true
    };
    (0, _testHelpers.shallowExpectToMatchSnapShot)(_react2.default.createElement(_Link2.default, props));
  });
});