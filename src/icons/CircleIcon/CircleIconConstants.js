// @flow

import colors from '../../themes/styles/colors';

const constants = {
  sizes: {
    small: 'small',
    medium: 'medium',
    large: 'large',
  },
  defaultSVGIconColor: colors.white,
  circleDiameters: {
    small: 32,
    medium: 48,
    large: 56,
  },
  tops: {
    small: 8,
    medium: 12,
    large: 12,
  },
  sizeReductions: {
    small: { xsmall: true },
    medium: { small: true },
    large: { medium: true },
  },
};

export default constants;
