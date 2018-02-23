'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportBooleanNameGroup = exports.getObjectSupport = exports.getTruthyKey = exports.arrayToObject = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduce = require('ramda/src/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var arrayToObject = function arrayToObject(array) {
  var toObject = function toObject(acc, arrayElement) {
    return _extends({}, acc, _defineProperty({}, arrayElement, true));
  };
  return (0, _reduce2.default)(toObject, {}, array);
};

var getTruthyKey = function getTruthyKey(obj) {
  var truthyKeys = Object.keys(obj).filter(function (key) {
    return Boolean(obj[key]);
  });
  if (truthyKeys.length > 1) {
    var reason = truthyKeys.map(function (key) {
      return '\'' + key + '\'';
    }).join(', ');
    var errorMessage = _constants.multipleTruthyKeyError + ' [' + reason + ']';
    throw new Error(errorMessage);
  }
  return truthyKeys[0];
};

var getObjectSupport = function getObjectSupport(names, mapping) {
  var toObjectWithMapping = function toObjectWithMapping(acc, name) {
    return _extends({}, acc, _defineProperty({}, name, mapping ? mapping(name) : name));
  };
  return (0, _reduce2.default)(toObjectWithMapping, {}, names);
};

var supportBooleanNameGroup = function supportBooleanNameGroup(groupName, names, defaultName) {
  return function (props) {
    var activeName = names.find(function (name) {
      return props[name];
    });
    if (activeName) {
      return _defineProperty({}, groupName, activeName);
    }
    return defaultName ? _defineProperty({}, groupName, defaultName) : {};
  };
};

exports.arrayToObject = arrayToObject;
exports.getTruthyKey = getTruthyKey;
exports.getObjectSupport = getObjectSupport;
exports.supportBooleanNameGroup = supportBooleanNameGroup;