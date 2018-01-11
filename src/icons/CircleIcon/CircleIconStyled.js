// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';

type PropsDiameter = {
  [diameter: string]: number,
};

type PropsBackground = {
  [background: string]: string,
};

const getContainerDiameter = ({ diameter }: PropsDiameter) => diameter;
const getContainerBackground = ({ background }: PropsBackground) => background;

const CircleIconStyled = styled.div`
  display: inline-block;
  height: ${getContainerDiameter}px;
  width: ${getContainerDiameter}px;
  text-align: center;
  background: ${getContainerBackground};
  border-radius: 50%;
`;

export default CircleIconStyled;
