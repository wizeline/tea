// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import { buttonSizeSupport, iconButtonSupport } from './ButtonSupport';

const BaseButtonStyled = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  outline: none;
  transition: all 0.1s;
  ${buttonSizeSupport};
  ${iconButtonSupport};

  & > .svgContainer {
    display: flex;
  }
`;

const DarkerButton = BaseButtonStyled.extend`
  color: ${({ theme }) => theme.textPrimaryInvert};

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background-color: ${({ theme }) => theme.backgroundPrimaryDisabled};
    border: ${({ theme }) => theme.backgroundPrimaryDisabled};
    box-shadow: none;
    color: ${({ theme }) => theme.textPrimaryDisabled};

    & > .svgContainer {
      svg {
        fill: ${({ theme }) => theme.textPrimaryDisabled};
      }
    }
  }
`;

const LighterButton = BaseButtonStyled.extend`
  color: ${({ theme }) => theme.textPrimary};

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    border: solid 1px ${({ theme }) => theme.borderSecondaryDisabled};
    color: ${({ theme }) => theme.textSecondaryDisabled};

    & > .svgContainer {
      svg {
        fill: ${({ theme }) => theme.textSecondaryDisabled};
      }
    }
  }
`;

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
