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

export { DarkerButton, LighterButton };
