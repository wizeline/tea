'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* eslint flowtype-errors/enforce-min-coverage: 0 */

var _reduce = require('ramda/src/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _utils = require('../../../utils');

var _addItem = require('./add-item');

var _addItem2 = _interopRequireDefault(_addItem);

var _addPeople = require('./add-people');

var _addPeople2 = _interopRequireDefault(_addPeople);

var _arrowDown = require('./arrow-down');

var _arrowDown2 = _interopRequireDefault(_arrowDown);

var _bell = require('./bell');

var _bell2 = _interopRequireDefault(_bell);

var _book = require('./book');

var _book2 = _interopRequireDefault(_book);

var _building = require('./building');

var _building2 = _interopRequireDefault(_building);

var _calendar = require('./calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _check = require('./check');

var _check2 = _interopRequireDefault(_check);

var _creditCard = require('./credit-card');

var _creditCard2 = _interopRequireDefault(_creditCard);

var _cross = require('./cross');

var _cross2 = _interopRequireDefault(_cross);

var _dotsH = require('./dots-h');

var _dotsH2 = _interopRequireDefault(_dotsH);

var _duplicate = require('./duplicate');

var _duplicate2 = _interopRequireDefault(_duplicate);

var _flag = require('./flag');

var _flag2 = _interopRequireDefault(_flag);

var _heart = require('./heart');

var _heart2 = _interopRequireDefault(_heart);

var _info = require('./info');

var _info2 = _interopRequireDefault(_info);

var _lock = require('./lock');

var _lock2 = _interopRequireDefault(_lock);

var _magnifier = require('./magnifier');

var _magnifier2 = _interopRequireDefault(_magnifier);

var _missingViewBox = require('./missing-view-box');

var _missingViewBox2 = _interopRequireDefault(_missingViewBox);

var _pencil = require('./pencil');

var _pencil2 = _interopRequireDefault(_pencil);

var _people = require('./people');

var _people2 = _interopRequireDefault(_people);

var _plus = require('./plus');

var _plus2 = _interopRequireDefault(_plus);

var _trash = require('./trash');

var _trash2 = _interopRequireDefault(_trash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var internalData = {
  addItem: _addItem2.default,
  addPeople: _addPeople2.default,
  arrowDown: _arrowDown2.default,
  bell: _bell2.default,
  book: _book2.default,
  building: _building2.default,
  calendar: _calendar2.default,
  check: _check2.default,
  creditCard: _creditCard2.default,
  cross: _cross2.default,
  dotsH: _dotsH2.default,
  duplicate: _duplicate2.default,
  flag: _flag2.default,
  heart: _heart2.default,
  info: _info2.default,
  lock: _lock2.default,
  magnifier: _magnifier2.default,
  missingViewBox: _missingViewBox2.default,
  pencil: _pencil2.default,
  people: _people2.default,
  plus: _plus2.default,
  trash: _trash2.default
};

var exposeObject = function exposeObject(obj) {
  return (0, _reduce2.default)(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return _extends({}, acc, _defineProperty({}, (0, _utils.camelToLispCase)(key), value));
  }, {}, Object.entries(obj));
};

var exposedData = exposeObject(internalData);

var getSVG = function getSVG(name) {
  return name ? exposedData[name] : null;
};

exports.default = getSVG;