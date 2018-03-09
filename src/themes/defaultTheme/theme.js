// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import themeBackground from './themeBackground';
import themeText from './themeText';
import themeBorder from './themeBorder';

export default {
  ...themeBackground,
  ...themeText,
  ...themeBorder,
};
