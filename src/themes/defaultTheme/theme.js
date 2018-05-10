// @flow

import themeBackground from '../styles/backgrounds';
import themeText from './components/Text';
import themeBorder from '../styles/borders';
import themeError from './components/Error';

export default {
  ...themeBackground,
  ...themeBorder,
  ...themeError,
  ...themeText,
};
