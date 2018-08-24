export const XSMALL_SIZE = 'xsmall';
export const SMALL_SIZE = 'small';
export const MEDIUM_SIZE = 'medium';
export const LARGE_SIZE = 'large';
export const XLARGE_SIZE = 'xlarge';

export default props => {
  const { xsmall, small, medium, large, xlarge } = props;

  if (xsmall) {
    return XSMALL_SIZE;
  }

  if (small) {
    return SMALL_SIZE;
  }

  if (medium) {
    return MEDIUM_SIZE;
  }

  if (large) {
    return LARGE_SIZE;
  }

  if (xlarge) {
    return XLARGE_SIZE;
  }

  return '';
}
