// @flow
/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import { buttonSizeSupport, iconButtonSupport } from './ButtonSupport';
import { themeProp } from '../utils';

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
  color: ${themeProp('textPrimaryInvert')};

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background-color: ${themeProp('backgroundPrimaryDisabled')};
    border: ${themeProp('backgroundPrimaryDisabled')};
    box-shadow: none;
    color: ${themeProp('textPrimaryDisabled')};

    & > .svgContainer {
      svg {
        fill: ${themeProp('textPrimaryDisabled')};
      }
    }
  }
`;

const LighterButton = BaseButtonStyled.extend`
  color: ${themeProp('textPrimary')};

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    border: solid 1px ${themeProp('borderSecondaryDisabled')};
    color: ${themeProp('textSecondaryDisabled')};

    & > .svgContainer {
      svg {
        fill: ${themeProp('textSecondaryDisabled')};
      }
    }
  }
`;

export { DarkerButton, LighterButton };
