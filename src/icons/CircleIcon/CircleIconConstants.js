// @flow

const constants = {
  defaultSize: 'small',
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
    small: 'xsmall',
    medium: 'small',
    large: 'medium',
  },
};

const isSizeValid = (size: ?string): boolean =>
  size === undefined || constants.circleDiameters.hasOwnProperty(size);
const parseSize = (size: ?string): string =>
  !size ? constants.defaultSize : size;
const getDiameter = (parsedSize: string): number =>
  constants.circleDiameters[parsedSize];
const getSVGIconSize = (parsedSize: string): string =>
  constants.sizeReductions[parsedSize];
const getTopOffset = (parsedSize: string): number => constants.tops[parsedSize];

export {
  constants,
  isSizeValid,
  parseSize,
  getDiameter,
  getSVGIconSize,
  getTopOffset,
};
