// @flow
/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import { buttonSizeSupport, iconButtonSupport } from './ButtonSupport';
import { themeProp } from '../utils';
import defaultButtonTheme from '../themes/defaultTheme/components/Button';
import themeConstants from '../themes/defaultTheme/constants';

const {
  BACKGROUND_PRIMARY_DISABLED,
  BORDER_SECONDARY_DISABLED,
  TEXT_PRIMARY_DISABLED,
  TEXT_PRIMARY_INVERT,
  TEXT_PRIMARY,
  TEXT_SECONDARY_DISABLED,
} = themeConstants;

const BaseButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
  ${buttonSizeSupport};
  ${iconButtonSupport};

  & > .svgContainer {
    display: flex;
  }
`;

const DarkerButton = BaseButtonStyled.extend`
  color: ${themeProp(TEXT_PRIMARY_INVERT)};

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background-color: ${themeProp(BACKGROUND_PRIMARY_DISABLED)};
    border: ${themeProp(BACKGROUND_PRIMARY_DISABLED)};
    box-shadow: none;
    color: ${themeProp(TEXT_PRIMARY_DISABLED)};

    & > .svgContainer {
      svg {
        fill: ${themeProp(TEXT_PRIMARY_DISABLED)};
      }
    }
  }
`;

const LighterButton = BaseButtonStyled.extend`
  color: ${themeProp(TEXT_PRIMARY)};

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    border: solid 1px ${themeProp(BORDER_SECONDARY_DISABLED)};
    color: ${themeProp(TEXT_SECONDARY_DISABLED)};

    & > .svgContainer {
      svg {
        fill: ${themeProp(TEXT_SECONDARY_DISABLED)};
      }
    }
  }
`;

BaseButtonStyled.defaultProps = {
  theme: defaultButtonTheme,
};

export { DarkerButton, LighterButton };
