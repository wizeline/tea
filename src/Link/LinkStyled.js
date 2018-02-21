// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import { getLinkStyleSupport } from './LinkSupport';

const LinkAnchorStyled = styled.a`
  text-decoration: none;
  ${getLinkStyleSupport};
`;

export default LinkAnchorStyled;
