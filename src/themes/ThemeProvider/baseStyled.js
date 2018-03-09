// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import { injectGlobal, css } from 'styled-components';
import reset from 'styled-reset';

import ProximaNovaBold from '../../fonts/ProximaNova-Bold';
import ProximaNovaLight from '../../fonts/ProximaNova-Light';
import ProximaNovaRegular from '../../fonts/ProximaNova-Regular';
import ProximaNovaSemibold from '../../fonts/ProximaNova-Semibold';

const injectFontFace = (fontFamily, font) => css`
  @font-face {
    font-family: "${fontFamily}";
    src:  url(${font.eot}); /* IE9 Compat Modes */
    src:  url(${font.eot}) format('embedded-opentype'), /* IE6-IE8 */
          url(${font.woff2}) format('woff2'), /* Super Modern Browsers */
          url(${font.woff}) format('woff'), /* Pretty Modern Browsers */
          url(${font.ttf}) format('truetype'); /* Safari, Android, iOS */
  }
`;

injectGlobal`
  ${reset};

  ${injectFontFace('ProximaNova Bold', ProximaNovaBold)};
  ${injectFontFace('ProximaNova Light', ProximaNovaLight)};
  ${injectFontFace('ProximaNova Regular', ProximaNovaRegular)};
  ${injectFontFace('ProximaNova Semibold', ProximaNovaSemibold)};
  
  html {
    box-sizing: border-box;
    font-family: "ProximaNova Regular";
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
