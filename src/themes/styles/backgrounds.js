// @flow

import colors from './colors';
import backgroundConstants from '../defaultTheme/constants';

export default {
  [backgroundConstants.BACKGROUND_PRIMARY]: colors.blueBase,
  [backgroundConstants.BACKGROUND_PRIMARY_DISABLED]: colors.silverLighten40,
  [backgroundConstants.BACKGROUND_SECONDARY]: colors.white,
  [backgroundConstants.BACKGROUND_SECONDARY_HOVER]: colors.white,
  [backgroundConstants.BACKGROUND_SECONDARY_DISABLED]: colors.white,
  [backgroundConstants.BACKGROUND_DANGER]: colors.redLighten10,
  [backgroundConstants.BACKGROUND_DANGER_DISABLED]: colors.silverLighten40,
  [backgroundConstants.BACKGROUND_INPUT]: colors.white,
};
