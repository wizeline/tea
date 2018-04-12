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
  [TEXT_PRIMARY]: colors.charcoalGrey,
  [TEXT_PRIMARY_INVERT]: colors.white,
  [TEXT_PRIMARY_HOVER]: colors.white,
  [TEXT_PRIMARY_DISABLED]: colors.coolGrey,
  [TEXT_SECONDARY]: colors.charcoalGrey,
  [TEXT_SECONDARY_HOVER]: colors.white,
  [TEXT_SECONDARY_DISABLED]: colors.silver,
  [TEXT_DANGER]: colors.white,
  [TEXT_DANGER_HOVER]: colors.white,
  [TEXT_DANGER_DISABLED]: colors.silver,
  [TEXT_INPUT]: colors.charcoalGrey,
  [TEXT_INPUT_PLACEHOLDER]: colors.coolGrey,
  [TEXT_INPUT_FOCUS]: colors.coolGrey,
  [TEXT_INPUT_INVALID]: colors.tomato,
  [TEXT_ICON]: colors.white,
  [TEXT_ICON_INVERT]: colors.darkGrey,
  [TEXT_BODY]: colors.charcoalGrey,
  [TEXT_HEADING]: colors.charcoalGrey,
  [TEXT_SUBTITLE]: colors.coolGrey,
};
