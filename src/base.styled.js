// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import { injectGlobal, css } from 'styled-components';
import reset from 'styled-reset';

const fontFamilies = {
  'ProximaNova Regular': {
    eot: require('./fonts/ProximaNova-Regular.eot'),
    woff2: require('./fonts/ProximaNova-Regular.woff2'),
    woff: require('./fonts/ProximaNova-Regular.woff'),
    ttf: require('./fonts/ProximaNova-Regular.ttf'),
  },
  'ProximaNova Semibold': {
    eot: require('./fonts/ProximaNova-Semibold.eot'),
    woff2: require('./fonts/ProximaNova-Semibold.woff2'),
    woff: require('./fonts/ProximaNova-Semibold.woff'),
    ttf: require('./fonts/ProximaNova-Semibold.ttf'),
  },
  'ProximaNova Bold': {
    eot: require('./fonts/ProximaNova-Bold.eot'),
    woff2: require('./fonts/ProximaNova-Bold.woff2'),
    woff: require('./fonts/ProximaNova-Bold.woff'),
    ttf: require('./fonts/ProximaNova-Bold.ttf'),
  },
  'ProximaNova Light': {
    eot: require('./fonts/ProximaNova-Light.eot'),
    woff2: require('./fonts/ProximaNova-Light.woff2'),
    woff: require('./fonts/ProximaNova-Light.woff'),
    ttf: require('./fonts/ProximaNova-Light.ttf'),
  },
};

const injectFontFace = fontFamily => css`
  @font-face {
    font-family: "${fontFamily}";
    src:  url(${fontFamilies[fontFamily].eot}); /* IE9 Compat Modes */
    src:  url(${
      fontFamilies[fontFamily].eot
    }) format('embedded-opentype'), /* IE6-IE8 */
          url(${
            fontFamilies[fontFamily].woff2
          }) format('woff2'), /* Super Modern Browsers */
          url(${
            fontFamilies[fontFamily].woff
          }) format('woff'), /* Pretty Modern Browsers */
          url(${
            fontFamilies[fontFamily].ttf
          }) format('truetype'); /* Safari, Android, iOS */
  }
`;

injectGlobal`
  ${reset};

  ${injectFontFace('ProximaNova Regular')};
  ${injectFontFace('ProximaNova Semibold')};
  ${injectFontFace('ProximaNova Light')};
  ${injectFontFace('ProximaNova Bold')};
  
  html {
    box-sizing: border-box;
    font-family: "ProximaNova Regular";
    background: 'blue';
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
