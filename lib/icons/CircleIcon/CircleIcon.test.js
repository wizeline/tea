'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

var _CircleIcon = require('./CircleIcon');

var _CircleIcon2 = _interopRequireDefault(_CircleIcon);

var _testHelpers = require('../../utils/testHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CircleIcon', function () {
  it('renders correctly with undefined size attribute', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CircleIcon2.default, { name: 'cross' }));
    expect((0, _enzymeToJson2.default)(wrapper)).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('border-radius', '50%');
  });
  it('renders correctly when given svgData', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CircleIcon2.default, { svgData: _react2.default.createElement('g', null) }));
    expect((0, _enzymeToJson2.default)(wrapper)).toMatchSnapshot();
  });
  it('renders correctly with valid size', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CircleIcon2.default, { name: 'cross', size: 'large' }));
    expect((0, _enzymeToJson2.default)(wrapper)).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('border-radius', '50%');
  });
  it('renders nothing with invalid size', function () {
    (0, _testHelpers.shallowExpectInvalid)(_react2.default.createElement(_CircleIcon2.default, { name: 'cross', size: 'xlarge' }));
  });
});