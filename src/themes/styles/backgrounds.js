// @flow

import colors from './colors';
import backgroundConstants from '../defaultTheme/constants';

export default {
  [backgroundConstants.BACKGROUND_PRIMARY]: colors.darkSkyBlue,
  [backgroundConstants.BACKGROUND_PRIMARY_HOVER]: colors.dullBlue,
  [backgroundConstants.BACKGROUND_PRIMARY_DISABLED]: colors.paleGrey3,
  [backgroundConstants.BACKGROUND_SECONDARY]: colors.white,
  [backgroundConstants.BACKGROUND_SECONDARY_HOVER]: colors.white,
  [backgroundConstants.BACKGROUND_SECONDARY_DISABLED]: colors.white,
  [backgroundConstants.BACKGROUND_DANGER]: colors.rosyPink,
  [backgroundConstants.BACKGROUND_DANGER_HOVER]: colors.tomato,
  [backgroundConstants.BACKGROUND_DANGER_DISABLED]: colors.paleGrey3,
  [backgroundConstants.BACKGROUND_INPUT]: colors.white,
};
