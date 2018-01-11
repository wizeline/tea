// @flow

const defaultSizeKey = 'xsmall';
const containerSizes = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 56,
};

const preserveAspectRatio = 'xMidYMid meet';

const getContainerSize = (sizeKey: string = defaultSizeKey) =>
  containerSizes[sizeKey];
const getPreserveAspectRatio = () => preserveAspectRatio;

export { getPreserveAspectRatio, getContainerSize };
