// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

injectGlobal`
  ${reset};

  html {
    box-sizing: border-box;
    font-family: 'ProximaNova', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
