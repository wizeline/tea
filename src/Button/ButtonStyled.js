// @flow

import { DarkerButton, LighterButton } from './ButtonBaseStyled';
import { themeProp } from '../utils';
import themeConstants from '../themes/defaultTheme/constants';

const {
  BACKGROUND_DANGER_HOVER,
  BACKGROUND_DANGER,
  BACKGROUND_PRIMARY_HOVER,
  BACKGROUND_PRIMARY,
  BACKGROUND_SECONDARY_HOVER,
  BACKGROUND_SECONDARY,
  BORDER_SECONDARY_HOVER,
  BORDER_SECONDARY,
} = themeConstants;

const getDarkerButtonVariant = (baseName, baseNameHover) => DarkerButton.extend`
  background-color: ${themeProp(baseName)};
  border: ${themeProp(baseName)};

  &:hover,
  &:active {
    background-color: ${themeProp(`${baseNameHover}`)};
    border: ${themeProp(baseName)};
  }
`;

const PrimaryButton = getDarkerButtonVariant(
  BACKGROUND_PRIMARY,
  BACKGROUND_PRIMARY_HOVER,
);

const DestructiveButton = getDarkerButtonVariant(
  BACKGROUND_DANGER,
  BACKGROUND_DANGER_HOVER,
);

const SecondaryButton = LighterButton.extend`
  background-color: ${themeProp(BACKGROUND_SECONDARY)};
  border: solid 1px ${themeProp(BORDER_SECONDARY)};
  box-shadow: 0 0.125rem 0.0625rem 0 rgba(0, 0, 0, 0.03);

  &:hover,
  &:active {
    background-color: ${themeProp(BACKGROUND_SECONDARY_HOVER)};
    border: solid 1px ${themeProp(BORDER_SECONDARY_HOVER)};
  }
`;

export { PrimaryButton, DestructiveButton, SecondaryButton };
