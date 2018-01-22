// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import type { DiameterProps, BackgroundProps } from './CircleIconTypes';
import constants from './CircleIconConstants';

const getContainerDiameter = ({ size }: DiameterProps) =>
  constants.circleDiameters[size];

const getContainerBackground = (props: BackgroundProps) =>
  props.background || props.theme.backgroundPrimary;

const CircleIconStyled = styled.div`
  display: inline-block;
  height: ${getContainerDiameter}px;
  width: ${getContainerDiameter}px;
  text-align: center;
  background: ${getContainerBackground};
  border-radius: 50%;
`;

export default CircleIconStyled;
