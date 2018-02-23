'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var camelToLispCase = function camelToLispCase(word) {
  return word.replace(/([A-Z])/g, function (captureGroup) {
    return '-' + captureGroup.toLowerCase();
  });
};

var lispToCamelCase = function lispToCamelCase(word) {
  return word.split('-').reduce(function (result, token) {
    return result + token.replace(/^\w/, function (chr) {
      return chr.toUpperCase();
    });
  });
};

exports.camelToLispCase = camelToLispCase;
exports.lispToCamelCase = lispToCamelCase;