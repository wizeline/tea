// @flow

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
  [BORDER_SECONDARY]: colors.inkLighten10,
  [BORDER_SECONDARY_HOVER]: colors.blueBase,
  [BORDER_SECONDARY_DISABLED]: colors.silverLighten40,
  [BORDER_INPUT]: colors.silverLighten40,
  [BORDER_INPUT_FOCUS]: colors.blueBase,
  [BORDER_INPUT_INVALID]: colors.redLighten10,
};
