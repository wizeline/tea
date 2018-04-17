// @flow
/* eslint flowtype-errors/enforce-min-coverage: 0 */

import colors from './colors';
import { borderConstants } from '../defaultTheme/constants';

const {
  BORDER_SECONDARY,
  BORDER_SECONDARY_HOVER,
  BORDER_SECONDARY_DISABLED,
  BORDER_INPUT,
  BORDER_INPUT_FOCUS,
  BORDER_INPUT_INVALID,
} = borderConstants;

export default {
  [BORDER_SECONDARY]: colors.darkGrayLighten10.hex(),
  [BORDER_SECONDARY_HOVER]: colors.blueBase.hex(),
  [BORDER_SECONDARY_DISABLED]: colors.silverLighten40.hex(),
  [BORDER_INPUT]: colors.silverLighten40.hex(),
  [BORDER_INPUT_FOCUS]: colors.blueBase.hex(),
  [BORDER_INPUT_INVALID]: colors.redLighten10.hex(),
};
