// @flow

import styled from 'styled-components';
import { getTextStyleSupport } from './TextSupport';

const TextSpanStyled = styled.span`
  ${getTextStyleSupport};
`;

export default TextSpanStyled;
