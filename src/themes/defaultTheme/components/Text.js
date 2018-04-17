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
  [TEXT_PRIMARY]: colors.darkGrayDarken10.hex(),
  [TEXT_PRIMARY_INVERT]: colors.white.hex(),
  [TEXT_PRIMARY_HOVER]: colors.white.hex(),
  [TEXT_PRIMARY_DISABLED]: colors.darkGrayLighten10.hex(),
  [TEXT_SECONDARY]: colors.darkGrayDarken10.hex(),
  [TEXT_SECONDARY_HOVER]: colors.white.hex(),
  [TEXT_SECONDARY_DISABLED]: colors.silverLighten30.hex(),
  [TEXT_DANGER]: colors.white.hex(),
  [TEXT_DANGER_HOVER]: colors.white.hex(),
  [TEXT_DANGER_DISABLED]: colors.silverLighten30.hex(),
  [TEXT_INPUT]: colors.darkGrayDarken10.hex(),
  [TEXT_INPUT_PLACEHOLDER]: colors.darkGrayLighten10.hex(),
  [TEXT_INPUT_FOCUS]: colors.darkGrayLighten10.hex(),
  [TEXT_INPUT_INVALID]: colors.redBase.hex(),
  [TEXT_ICON]: colors.white.hex(),
  [TEXT_ICON_INVERT]: colors.darkGrayDarken20.hex(),
  [TEXT_BODY]: colors.darkGrayDarken10.hex(),
  [TEXT_HEADING]: colors.darkGrayDarken10.hex(),
  [TEXT_SUBTITLE]: colors.darkGrayLighten10.hex(),
};
