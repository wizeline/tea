// @flow

import styled from 'styled-components';
import constants from './TextConstants';

const getProperty = key => ({ preset }) => constants[preset][key];

const TextStyled = styled.div`
  font-family: ${getProperty('fontFamily')};
  font-size: ${getProperty('fontSize')}px;
  font-weight: ${getProperty('fontWeight')};
  line-height: ${getProperty('lineHeight')};
`;

export default TextStyled;
