// @flow

import backgroundConstants from './backgrounds';
import baseColorConstants from './baseColor';
import borderConstants from './borders';
import otherConstants from './other';
import textConstants from './text';

export { backgroundConstants };
export { borderConstants };
export { otherConstants };
export { textConstants };

export default {
  ...backgroundConstants,
  ...baseColorConstants,
  ...borderConstants,
  ...otherConstants,
  ...textConstants,
};
