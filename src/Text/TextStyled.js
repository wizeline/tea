// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import { getTextStyleSupport } from './TextSupport';

const TextSpanStyled = styled.span`
  ${getTextStyleSupport};
`;

export default TextSpanStyled;
