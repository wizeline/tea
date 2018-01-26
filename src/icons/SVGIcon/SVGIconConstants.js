// @flow

import defaultTheme from '../../themes';

const constants: {
  preserveAspectRatio: string,
  defaultViewBox: string,
  defaultFillColor: string,
  defaultSizeKey: string,
  sizes: Object,
} = {
  preserveAspectRatio: 'xMidYMid meet',
  defaultViewBox: '0 0 24 24',
  defaultFillColor: defaultTheme.textPrimary,
  defaultSizeKey: 'xsmall',
  sizes: {
    xlarge: 56,
    large: 48,
    medium: 32,
    small: 24,
    xsmall: 16,
  },
};

export default constants;
