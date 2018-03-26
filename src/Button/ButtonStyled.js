// @flow
/* eslint flowtype-errors/enforce-min-coverage: 0 */

import { DarkerButton, LighterButton } from './ButtonBaseStyled';
import { themeProp } from '../utils';

const getDarkerButtonVariant = baseName => DarkerButton.extend`
  background-color: ${themeProp(baseName)};
  border: ${themeProp(baseName)};

  &:hover,
  &:active {
    background-color: ${themeProp(`${baseName}Hover`)};
    border: ${themeProp(baseName)};
  }
`;

const PrimaryButton = getDarkerButtonVariant('backgroundPrimary');

const DestructiveButton = getDarkerButtonVariant('backgroundDanger');

const SecondaryButton = LighterButton.extend`
  background-color: ${themeProp('backgroundSecondary')};
  border: solid 1px ${themeProp('borderSecondary')};
  box-shadow: 0 0.125rem 0.0625rem 0 rgba(0, 0, 0, 0.03);

  &:hover,
  &:active {
    background-color: ${themeProp('backgroundSecondaryHover')};
    border: solid 1px ${themeProp('borderSecondaryHover')};
  }
`;

export { PrimaryButton, DestructiveButton, SecondaryButton };
