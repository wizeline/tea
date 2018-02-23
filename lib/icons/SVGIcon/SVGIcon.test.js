'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

var _SVGIcon = require('./SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

var _div = require('./styled/div');

var _div2 = _interopRequireDefault(_div);

var _svg = require('./styled/svg');

var _svg2 = _interopRequireDefault(_svg);

var _testHelpers = require('../../utils/testHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SVGIcon', function () {
  it('renders correctly with an undefined size and a valid name that references an SVG with a defined viewBox', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SVGIcon2.default, { name: 'cross' }));
    expect((0, _enzymeToJson2.default)(wrapper)).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('top', '0px');
  });
  it('renders correctly with a valid size and a valid name that references an SVG without a defined viewBox', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SVGIcon2.default, { name: 'missing-view-box', size: 'large', top: 20 }));
    expect((0, _enzymeToJson2.default)(wrapper)).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('top', '20px');
  });
  it('renders correctly when given svgData', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SVGIcon2.default, { svgData: _react2.default.createElement('g', null) }));
    expect((0, _enzymeToJson2.default)(wrapper)).toMatchSnapshot();
  });
  it('renders nothing with an invalid name and undefined size attribute', function () {
    (0, _testHelpers.shallowExpectInvalid)(_react2.default.createElement(_SVGIcon2.default, { name: 'InvalidIconName' }));
  });
  it('renders nothing with invalid name and invalid size', function () {
    (0, _testHelpers.shallowExpectInvalid)(_react2.default.createElement(_SVGIcon2.default, { name: 'InvalidIconName', size: 'InvalidSize' }));
  });
  it('renders nothing with an undefined name and undefined size', function () {
    (0, _testHelpers.shallowExpectInvalid)(_react2.default.createElement(_SVGIcon2.default, null));
  });
});

describe('SVGIconSvgStyled', function () {
  it('renders correctly without any defined attributes', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_svg2.default, null));
    expect((0, _enzymeToJson2.default)(wrapper)).toMatchSnapshot();
  });
  it('renders correctly with defined color', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_svg2.default, { fill: 'red' }));
    expect((0, _enzymeToJson2.default)(wrapper)).toMatchSnapshot();
  });
});

describe('SVGIconDivStyled', function () {
  it('renders correctly with defined valid container size', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_div2.default, { size: 'large' }));
    expect((0, _enzymeToJson2.default)(wrapper)).toMatchSnapshot();
  });
  it('renders correctly with defined invalid container size', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_div2.default, { size: 'invalidSize' }));
    expect((0, _enzymeToJson2.default)(wrapper)).toMatchSnapshot();
  });
  it('renders correctly with defined top', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_div2.default, { top: 10 }));
    expect((0, _enzymeToJson2.default)(wrapper)).toMatchSnapshot();
  });
});