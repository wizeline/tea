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
