'use strict';

var _templateObject = _taggedTemplateLiteral(['\n  @font-face {\n    font-family: "', '";\n    src:  url(', '); /* IE9 Compat Modes */\n    src:  url(', ') format(\'embedded-opentype\'), /* IE6-IE8 */\n          url(', ') format(\'woff2\'), /* Super Modern Browsers */\n          url(', ') format(\'woff\'), /* Pretty Modern Browsers */\n          url(', ') format(\'truetype\'); /* Safari, Android, iOS */\n  }\n'], ['\n  @font-face {\n    font-family: "', '";\n    src:  url(', '); /* IE9 Compat Modes */\n    src:  url(', ') format(\'embedded-opentype\'), /* IE6-IE8 */\n          url(', ') format(\'woff2\'), /* Super Modern Browsers */\n          url(', ') format(\'woff\'), /* Pretty Modern Browsers */\n          url(', ') format(\'truetype\'); /* Safari, Android, iOS */\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ';\n\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  \n  html {\n    box-sizing: border-box;\n    font-family: "ProximaNova Regular";\n    background: \'blue\';\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n'], ['\n  ', ';\n\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  \n  html {\n    box-sizing: border-box;\n    font-family: "ProximaNova Regular";\n    background: \'blue\';\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledReset = require('styled-reset');

var _styledReset2 = _interopRequireDefault(_styledReset);

var _ProximaNovaBold = require('../../fonts/ProximaNova-Bold');

var _ProximaNovaBold2 = _interopRequireDefault(_ProximaNovaBold);

var _ProximaNovaLight = require('../../fonts/ProximaNova-Light');

var _ProximaNovaLight2 = _interopRequireDefault(_ProximaNovaLight);

var _ProximaNovaRegular = require('../../fonts/ProximaNova-Regular');

var _ProximaNovaRegular2 = _interopRequireDefault(_ProximaNovaRegular);

var _ProximaNovaSemibold = require('../../fonts/ProximaNova-Semibold');

var _ProximaNovaSemibold2 = _interopRequireDefault(_ProximaNovaSemibold);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint flowtype-errors/enforce-min-coverage: 0 */

var injectFontFace = function injectFontFace(fontFamily, font) {
  return (0, _styledComponents.css)(_templateObject, fontFamily, font.eot, font.eot, font.woff2, font.woff, font.ttf);
};

(0, _styledComponents.injectGlobal)(_templateObject2, _styledReset2.default, injectFontFace('ProximaNova Bold', _ProximaNovaBold2.default), injectFontFace('ProximaNova Light', _ProximaNovaLight2.default), injectFontFace('ProximaNova Regular', _ProximaNovaRegular2.default), injectFontFace('ProximaNova Semibold', _ProximaNovaSemibold2.default));