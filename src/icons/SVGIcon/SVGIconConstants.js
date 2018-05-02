// @flow

const constants: {
  defaultTop: number,
  preserveAspectRatio: string,
  defaultViewBox: string,
  defaultFillColorThemeName: string,
  defaultInvertFillColorThemeName: string,
  defaultSizeKey: string,
  sizes: {
    xlarge: number,
    large: number,
    medium: number,
    small: number,
    xsmall: number,
  },
  sizeNames: {
    xlarge: string,
    large: string,
    medium: string,
    small: string,
    xsmall: string,
  },
} = {
  defaultTop: 0,
  preserveAspectRatio: 'xMidYMid meet',
  defaultViewBox: '0 0 24 24',
  defaultFillColorThemeName: 'textPrimary',
  defaultInvertFillColorThemeName: 'textPrimaryInvert',
  defaultSizeKey: 'xsmall',
  sizes: {
    xlarge: 56,
    large: 48,
    medium: 32,
    small: 24,
    xsmall: 16,
  },
  sizeNames: {
    xlarge: 'xlarge',
    large: 'large',
    medium: 'medium',
    small: 'small',
    xsmall: 'xsmall',
  },
};

export default constants;
