// @flow

import { placeholder } from 'polished';
import styled from 'styled-components';
import defaultInputTheme from '../../themes/defaultTheme/components/Input';
import {
  borderConstants,
  textConstants,
} from '../../themes/defaultTheme/constants';
import type { InputProps } from './InputTypes';

const getWidth = ({ size }: InputProps): number => size || 18.75;
const getThemeProp = (prop: string) => ({ theme }: InputProps): ?string =>
  theme[prop];
const getPlaceholder = (prop: string) => (props: InputProps) =>
  placeholder({ color: getThemeProp(prop)(props) });

const BaseInputStyled = styled.input`
  border-radius: 0.1875rem;
  box-sizing: border-box;
  font-size: 0.875rem;
  height: 2.5rem;
  outline: none;
  padding: 0 1rem;
  transition: all 0.1s;
  width: ${getWidth}rem;
  ${getPlaceholder(textConstants.TEXT_INPUT_PLACEHOLDER)};
`;

const InputStyled = BaseInputStyled.extend`
  border: solid 0.0625rem ${getThemeProp(borderConstants.BORDER_INPUT)};

  &:focus {
    border: solid 0.0625rem ${getThemeProp(borderConstants.BORDER_INPUT_FOCUS)};
  }
`;

const ErrorInputStyled = BaseInputStyled.extend`
  border: solid 0.0625rem ${getThemeProp(borderConstants.BORDER_INPUT_INVALID)};
`;

BaseInputStyled.defaultProps = {
  theme: {
    ...defaultInputTheme,
  },
};

export { InputStyled, ErrorInputStyled };
