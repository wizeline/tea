const invalidSize = -1;
const sizes = {
  xlarge: 128,
  large: 64,
  medium: 32,
  small: 24,
  xsmall: 16,
};

const getContainerSize = (props) => {
  const { size, xlarge, large, medium, small, xsmall, ...otherProps } = props;
  const sizeFlags = { xlarge, large, medium, small, xsmall };
  let result = invalidSize;
  if (size) {
    if (size.length > 2 && size.trim().slice(-2) === 'px') {
      result = size.trim().slice(0, -2);
    } else if (size.toLowerCase() in sizes) {
      result = sizes[size.toLowerCase()];
    }
  }
  if (sizeFlags) {
    Object.entries(sizeFlags)
      .filter((flag, value) => value)
      .forEach((flag, value) => {
        if (flag in sizes && sizes[flag] > result) {
          result = sizes[flag];
        }
      }
    );
  }
  if (result === invalidSize) {
    result = sizes.medium;
  }
  return '' + result + 'px';
};

export {
  getContainerSize,
};
