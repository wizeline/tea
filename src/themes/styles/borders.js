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
  [BORDER_SECONDARY]: colors.coolGrey,
  [BORDER_SECONDARY_HOVER]: colors.darkSkyBlue,
  [BORDER_SECONDARY_DISABLED]: colors.paleGrey3,
  [BORDER_INPUT]: colors.paleGrey3,
  [BORDER_INPUT_FOCUS]: colors.darkSkyBlue,
  [BORDER_INPUT_INVALID]: colors.rosyPink,
};
