// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import type { SVGFillProps, ContainerSizeProps } from './IconTypes';
import constants from './IconConstants';

const getSVGFill = ({
  iconFillColor: iconFillColor = constants.defaultFillColor,
}: SVGFillProps) => iconFillColor;

const getContainerSize = ({ size }: ContainerSizeProps) =>
  constants.sizes[size] || constants.sizes[constants.defaultSizeKey];

const IconDivStyled = styled.div`
  display: inline-block;
  position: relative;
  height: ${getContainerSize}px;
  width: ${getContainerSize}px;
  vertical-align: middle;
  text-align: center;
`;

const IconSvgStyled = styled.svg`
  fill: ${getSVGFill};
  user-select: none;
  margin: 0 auto;
`;

export { getSVGFill, IconDivStyled, IconSvgStyled };
