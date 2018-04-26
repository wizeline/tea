// @flow

import constants from './CircleIconConstants';
import type { CircleIconProps } from './CircleIconTypes';

const { sizes } = constants;
const parseSize = ({ medium, large }: CircleIconProps): string => {
  if (medium) {
    return sizes.medium;
  }
  if (large) {
    return sizes.large;
  }
  return sizes.small;
};

export default parseSize;
