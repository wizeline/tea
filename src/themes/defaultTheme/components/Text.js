// @flow

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
  [TEXT_PRIMARY]: colors.inkDarken10,
  [TEXT_PRIMARY_INVERT]: colors.white,
  [TEXT_PRIMARY_HOVER]: colors.white,
  [TEXT_PRIMARY_DISABLED]: colors.inkLighten10,
  [TEXT_SECONDARY]: colors.inkDarken10,
  [TEXT_SECONDARY_HOVER]: colors.white,
  [TEXT_SECONDARY_DISABLED]: colors.silverLighten30,
  [TEXT_DANGER]: colors.white,
  [TEXT_DANGER_HOVER]: colors.white,
  [TEXT_DANGER_DISABLED]: colors.silverLighten30,
  [TEXT_INPUT]: colors.inkDarken10,
  [TEXT_INPUT_PLACEHOLDER]: colors.inkLighten10,
  [TEXT_INPUT_FOCUS]: colors.inkLighten10,
  [TEXT_INPUT_INVALID]: colors.redBase,
  [TEXT_ICON]: colors.white,
  [TEXT_ICON_INVERT]: colors.inkDarken20,
  [TEXT_BODY]: colors.inkDarken10,
  [TEXT_HEADING]: colors.inkDarken10,
  [TEXT_SUBTITLE]: colors.inkLighten10,
};
