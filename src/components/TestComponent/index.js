// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import styled from 'styled-components';

const DivStyled = styled.div`
  display: block;
  background: ${props => props.theme.backgroundPrimary || 'magenta'};
  height: 100px;
  width: 100px;
`;

const TestComponent = () => <DivStyled />;

export default TestComponent;
