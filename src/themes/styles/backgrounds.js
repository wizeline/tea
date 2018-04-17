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
  [BACKGROUND_PRIMARY]: colors.blueBase.hex(),
  [BACKGROUND_PRIMARY_HOVER]: colors.blueBase.lighten(0.1).hex(),
  [BACKGROUND_PRIMARY_DISABLED]: colors.silverLighten40.hex(),
  [BACKGROUND_SECONDARY]: colors.white.hex(),
  [BACKGROUND_SECONDARY_HOVER]: colors.white.hex(),
  [BACKGROUND_SECONDARY_DISABLED]: colors.white.hex(),
  [BACKGROUND_DANGER]: colors.redLighten10.hex(),
  [BACKGROUND_DANGER_HOVER]: colors.redLighten10.lighten(0.1).hex(),
  [BACKGROUND_DANGER_DISABLED]: colors.silverLighten40.hex(),
  [BACKGROUND_INPUT]: colors.white.hex(),
};
