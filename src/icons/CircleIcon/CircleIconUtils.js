// @flow

import constants from './CircleIconConstants';

const parseSize = (size: ?string): string => size || constants.defaultSize;
export default parseSize;
