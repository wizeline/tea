// @flow
/* eslint flowtype-errors/enforce-min-coverage: 0 */

import { DarkerButton, LighterButton } from './ButtonBaseStyled';

const PrimaryButton = DarkerButton.extend`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border: ${({ theme }) => theme.backgroundPrimary};

  &:hover,
  &:active {
    border: ${({ theme }) => theme.backgroundPrimary};
    background-color: ${({ theme }) => theme.backgroundPrimaryHover};
  }
`;

const DestructiveButton = DarkerButton.extend`
  background-color: ${({ theme }) => theme.backgroundDanger};
  border: ${({ theme }) => theme.backgroundDanger};

  &:hover,
  &:active {
    border: ${({ theme }) => theme.backgroundDanger};
    background-color: ${({ theme }) => theme.backgroundDangerHover};
  }
`;

const SecondaryButton = LighterButton.extend`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border: solid 1px ${({ theme }) => theme.borderSecondary};
  box-shadow: 0 0.125rem 0.0625rem 0 rgba(0, 0, 0, 0.03);

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.backgroundSecondaryHover};
    border: solid 1px ${({ theme }) => theme.borderSecondaryHover};
  }
`;

export { PrimaryButton, DestructiveButton, SecondaryButton };
