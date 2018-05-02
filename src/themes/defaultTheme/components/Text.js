// @flow

import colors from '../../styles/colors';
import themeConstants from '../constants';

export default {
  [themeConstants.TEXT_PRIMARY]: colors.inkDarken10,
  [themeConstants.TEXT_PRIMARY_INVERT]: colors.white,
  [themeConstants.TEXT_PRIMARY_HOVER]: colors.white,
  [themeConstants.TEXT_PRIMARY_DISABLED]: colors.inkLighten10,
  [themeConstants.TEXT_SECONDARY]: colors.inkDarken10,
  [themeConstants.TEXT_SECONDARY_HOVER]: colors.white,
  [themeConstants.TEXT_SECONDARY_DISABLED]: colors.silverLighten30,
  [themeConstants.TEXT_DANGER]: colors.white,
  [themeConstants.TEXT_DANGER_HOVER]: colors.white,
  [themeConstants.TEXT_DANGER_DISABLED]: colors.silverLighten30,
  [themeConstants.TEXT_INPUT]: colors.inkDarken10,
  [themeConstants.TEXT_INPUT_PLACEHOLDER]: colors.inkLighten10,
  [themeConstants.TEXT_INPUT_FOCUS]: colors.inkLighten10,
  [themeConstants.TEXT_INPUT_INVALID]: colors.redBase,
  [themeConstants.TEXT_ICON]: colors.white,
  [themeConstants.TEXT_ICON_INVERT]: colors.inkDarken20,
  [themeConstants.TEXT_BODY]: colors.inkDarken10,
  [themeConstants.TEXT_HEADING]: colors.inkDarken10,
  [themeConstants.TEXT_SUBTITLE]: colors.inkLighten10,
};
