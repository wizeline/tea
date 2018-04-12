// @flow

import colors from './colors';
import backgroundConstants from '../defaultTheme/constants';

const {
  BACKGROUND_PRIMARY,
  BACKGROUND_PRIMARY_HOVER,
  BACKGROUND_PRIMARY_DISABLED,
  BACKGROUND_SECONDARY,
  BACKGROUND_SECONDARY_HOVER,
  BACKGROUND_SECONDARY_DISABLED,
  BACKGROUND_DANGER,
  BACKGROUND_DANGER_HOVER,
  BACKGROUND_DANGER_DISABLED,
  BACKGROUND_INPUT,
} = backgroundConstants;

export default {
  [BACKGROUND_PRIMARY]: colors.darkSkyBlue,
  [BACKGROUND_PRIMARY_HOVER]: colors.dullBlue,
  [BACKGROUND_PRIMARY_DISABLED]: colors.paleGrey3,
  [BACKGROUND_SECONDARY]: colors.white,
  [BACKGROUND_SECONDARY_HOVER]: colors.white,
  [BACKGROUND_SECONDARY_DISABLED]: colors.white,
  [BACKGROUND_DANGER]: colors.rosyPink,
  [BACKGROUND_DANGER_HOVER]: colors.tomato,
  [BACKGROUND_DANGER_DISABLED]: colors.paleGrey3,
  [BACKGROUND_INPUT]: colors.white,
};
