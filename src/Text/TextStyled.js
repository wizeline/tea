// @flow

import styled from 'styled-components';
import constants from './TextConstants';
import type { ColorProps } from './TextTypes';

const getProperty = key => ({ preset }) => constants[preset][key];
const getColor = (props: ColorProps) => props.color || props.theme.textPrimary;
const getLetterSpacing = props =>
  props.letterSpacing || constants.defaultLetterSpacing;

const TextStyled = styled.div`
  font-family: ${getProperty('fontFamily')};
  font-size: ${getProperty('fontSize')}px;
  font-weight: ${getProperty('fontWeight')};
  line-height: ${getProperty('lineHeight')};
  color: ${getColor};
  letter-spacing: ${getLetterSpacing};
`;

export default TextStyled;
