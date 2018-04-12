// @flow

import backgroundConstants from './backgrounds';
import baseColorConstants from './baseColor';
import otherConstants from './other';
import textConstants from './text';

export { backgroundConstants };
export { otherConstants };
export { textConstants };

export default {
  ...backgroundConstants,
  ...baseColorConstants,
  ...otherConstants,
  ...textConstants,
};
