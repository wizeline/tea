// @flow

import defaultTheme from '../themes';

const constants: {
  preserveAspectRatio: string,
  defaultViewBox: string,
  defaultFillColor: string,
} = {
  preserveAspectRatio: 'xMidYMid meet',
  defaultViewBox: '0 0 24 24',
  defaultFillColor: defaultTheme.textPrimary,
};

export default constants;
