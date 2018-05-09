// @flow

import styled from 'styled-components';
import defaultInputTheme from '../../themes/defaultTheme/components/Input';
import type { InputProps } from './InputTypes';
import borderConstants from '../../themes/defaultTheme/constants';

const getWidth = ({ size }: InputProps) => size || 18.75;
const getThemeProp = (prop: string) => ({ theme }: InputProps) => theme[prop];

const BaseInputStyled = styled.input`
  width: ${getWidth}rem;
  height: 2.5rem;
  border-radius: 0.1875rem;
  font-size: 0.875rem;
  padding: 0 1rem;
  box-sizing: border-box;
  outline: none;
  transition: all 0.1s;
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

console.log(defaultInputTheme);

export { InputStyled, ErrorInputStyled };
