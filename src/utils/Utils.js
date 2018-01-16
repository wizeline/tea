// @flow

const defaultSizeKey = 'xsmall';
const sizes = {
  xlarge: 56,
  large: 48,
  medium: 32,
  small: 24,
  xsmall: 16,
};

const getContainerSize = (sizeKey: ?string) => {
  if (sizeKey && sizes.hasOwnProperty(sizeKey)) {
    return sizes[sizeKey];
  }
  return sizes[defaultSizeKey];
};

export default getContainerSize;
