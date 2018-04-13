// @flow
/* eslint flowtype-errors/enforce-min-coverage: 0 */

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
  [BACKGROUND_PRIMARY]: colors.blueBase.toString(),
  [BACKGROUND_PRIMARY_HOVER]: colors.blueBase.lighten(0.1).toString(),
  [BACKGROUND_PRIMARY_DISABLED]: colors.silverLighten40.toString(),
  [BACKGROUND_SECONDARY]: colors.white.toString(),
  [BACKGROUND_SECONDARY_HOVER]: colors.white.toString(),
  [BACKGROUND_SECONDARY_DISABLED]: colors.white.toString(),
  [BACKGROUND_DANGER]: colors.redLighten10.toString(),
  [BACKGROUND_DANGER_HOVER]: colors.redLighten10.lighten(0.1).toString(),
  [BACKGROUND_DANGER_DISABLED]: colors.silverLighten40.toString(),
  [BACKGROUND_INPUT]: colors.white.toString(),
};
