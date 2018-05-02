// @flow

import colors from './colors';
import { borderConstants } from '../defaultTheme/constants';

export default {
  [borderConstants.BORDER_SECONDARY]: colors.inkLighten10,
  [borderConstants.BORDER_SECONDARY_HOVER]: colors.blueBase,
  [borderConstants.BORDER_SECONDARY_DISABLED]: colors.silverLighten40,
  [borderConstants.BORDER_INPUT]: colors.silverLighten40,
  [borderConstants.BORDER_INPUT_FOCUS]: colors.blueBase,
  [borderConstants.BORDER_INPUT_INVALID]: colors.redLighten10,
};
