// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';

const TestComponent = styled.div`
  background: ${props => props.theme.backgroundPrimary};
  height: 100px;
  width: 100px;
`;

export default TestComponent;
