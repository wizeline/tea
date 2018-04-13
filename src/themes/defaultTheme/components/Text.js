// @flow
/* eslint flowtype-errors/enforce-min-coverage: 0 */

import colors from '../../styles/colors';
import textConstants from '../constants';

const {
  TEXT_PRIMARY,
  TEXT_PRIMARY_INVERT,
  TEXT_PRIMARY_HOVER,
  TEXT_PRIMARY_DISABLED,
  TEXT_SECONDARY,
  TEXT_SECONDARY_HOVER,
  TEXT_SECONDARY_DISABLED,
  TEXT_DANGER,
  TEXT_DANGER_HOVER,
  TEXT_DANGER_DISABLED,
  TEXT_INPUT,
  TEXT_INPUT_PLACEHOLDER,
  TEXT_INPUT_FOCUS,
  TEXT_INPUT_INVALID,
  TEXT_ICON,
  TEXT_ICON_INVERT,
  TEXT_BODY,
  TEXT_HEADING,
  TEXT_SUBTITLE,
} = textConstants;

export default {
  [TEXT_PRIMARY]: colors.darkGrayDarken10.toString(),
  [TEXT_PRIMARY_INVERT]: colors.white.toString(),
  [TEXT_PRIMARY_HOVER]: colors.white.toString(),
  [TEXT_PRIMARY_DISABLED]: colors.darkGrayLighten10.toString(),
  [TEXT_SECONDARY]: colors.darkGrayDarken10.toString(),
  [TEXT_SECONDARY_HOVER]: colors.white.toString(),
  [TEXT_SECONDARY_DISABLED]: colors.silverLighten30.toString(),
  [TEXT_DANGER]: colors.white.toString(),
  [TEXT_DANGER_HOVER]: colors.white.toString(),
  [TEXT_DANGER_DISABLED]: colors.silverLighten30.toString(),
  [TEXT_INPUT]: colors.darkGrayDarken10.toString(),
  [TEXT_INPUT_PLACEHOLDER]: colors.darkGrayLighten10.toString(),
  [TEXT_INPUT_FOCUS]: colors.darkGrayLighten10.toString(),
  [TEXT_INPUT_INVALID]: colors.redBase,
  [TEXT_ICON]: colors.white.toString(),
  [TEXT_ICON_INVERT]: colors.darkGrayDarken20.toString(),
  [TEXT_BODY]: colors.darkGrayDarken10.toString(),
  [TEXT_HEADING]: colors.darkGrayDarken10.toString(),
  [TEXT_SUBTITLE]: colors.darkGrayLighten10.toString(),
};
