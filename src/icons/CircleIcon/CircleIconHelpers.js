// @flow

const defaultSize = 'small';

const circleDiameters = {
  small: 32,
  medium: 48,
  large: 56,
};

const tops = {
  small: 8,
  medium: 12,
  large: 12,
};

const sizeReductions = {
  small: 'xsmall',
  medium: 'small',
  large: 'medium',
};

const isSizeValid = (size: ?string): boolean =>
  size === undefined || circleDiameters.hasOwnProperty(size);
const parseSize = (size: ?string): string => (!size ? defaultSize : size);
const getDiameter = (parsedSize: string): number => circleDiameters[parsedSize];
const getSquareIconSize = (parsedSize: string): string =>
  sizeReductions[parsedSize];
const getTopOffset = (parsedSize: string): number => tops[parsedSize];

export { isSizeValid, parseSize, getDiameter, getSquareIconSize, getTopOffset };
