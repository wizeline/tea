// @flow

import colors from './colors';
import backgroundConstants from '../defaultTheme/constants';

const {
  BACKGROUND_PRIMARY,
  BACKGROUND_PRIMARY_DISABLED,
  BACKGROUND_SECONDARY,
  BACKGROUND_SECONDARY_HOVER,
  BACKGROUND_SECONDARY_DISABLED,
  BACKGROUND_DANGER,
  BACKGROUND_DANGER_DISABLED,
  BACKGROUND_INPUT,
} = backgroundConstants;

export default {
  [BACKGROUND_PRIMARY]: colors.blueBase,
  [BACKGROUND_PRIMARY_DISABLED]: colors.silverLighten40,
  [BACKGROUND_SECONDARY]: colors.white,
  [BACKGROUND_SECONDARY_HOVER]: colors.white,
  [BACKGROUND_SECONDARY_DISABLED]: colors.white,
  [BACKGROUND_DANGER]: colors.redLighten10,
  [BACKGROUND_DANGER_DISABLED]: colors.silverLighten40,
  [BACKGROUND_INPUT]: colors.white,
};
