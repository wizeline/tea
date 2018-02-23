'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _testHelpers = require('../../utils/testHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Icon', function () {
  it('renders correctly', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Icon2.default, { name: 'cross' }));
    expect((0, _enzymeToJson2.default)(wrapper)).toMatchSnapshot();
  });
  it('renders correctly without defined size or background', function () {
    (0, _testHelpers.shallowExpectToMatchSnapShot)(_react2.default.createElement(_Icon2.default, { round: true, name: 'cross' }));
  });
  it('renders correctly with round, large and background', function () {
    (0, _testHelpers.shallowExpectToMatchSnapShot)(_react2.default.createElement(_Icon2.default, { round: true, large: true, name: 'cross', background: 'yellow' }));
  });
  it('renders correctly with round, large and undefined background', function () {
    (0, _testHelpers.shallowExpectToMatchSnapShot)(_react2.default.createElement(_Icon2.default, { round: true, large: true, name: 'cross' }));
  });
  it('renders correctly, invalid size ignored', function () {
    (0, _testHelpers.shallowExpectToMatchSnapShot)(_react2.default.createElement(_Icon2.default, { round: true, xlarge: true, name: 'cross' }));
  });
  it('throws an error with multiple truthy sizes', function () {
    (0, _testHelpers.mountExpectToThrow)(_react2.default.createElement(_Icon2.default, { round: true, xlarge: true, large: true, name: 'cross' }));
  });
  it('renders nothing with an invalid name and undefined size attribute', function () {
    (0, _testHelpers.shallowExpectInvalid)(_react2.default.createElement(_Icon2.default, { name: 'InvalidIconName' }));
  });
  it('renders nothing with invalid name and invalid size', function () {
    (0, _testHelpers.shallowExpectInvalid)(_react2.default.createElement(_Icon2.default, { name: 'InvalidIconName', size: 'InvalidSize' }));
  });
  it('renders nothing with an undefined name and undefined size', function () {
    (0, _testHelpers.shallowExpectInvalid)(_react2.default.createElement(_Icon2.default, null));
  });
  it('renders nothing with an invalid name and undefined size attribute', function () {
    (0, _testHelpers.shallowExpectInvalid)(_react2.default.createElement(_Icon2.default, { round: true, name: 'InvalidIconName' }));
  });
  it('renders nothing with round, invalid name and invalid size', function () {
    (0, _testHelpers.shallowExpectInvalid)(_react2.default.createElement(_Icon2.default, { round: true, name: 'InvalidIconName', size: 'InvalidSize' }));
  });
});