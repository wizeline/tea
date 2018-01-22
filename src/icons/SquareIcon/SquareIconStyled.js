// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import type {
  SVGFillProps,
  ContainerSizeProps,
  ContainerTopProps,
} from './SquareIconTypes';
import constants from './SquareIconConstants';

const getSVGFill = ({
  iconFillColor: iconFillColor = constants.defaultFillColor,
}: SVGFillProps) => iconFillColor;

const getContainerTop = ({ top }: ContainerTopProps) => top;
const getContainerSize = ({ size }: ContainerSizeProps) =>
  constants.sizes[size] || constants.sizes[constants.defaultSizeKey];

const SquareIconDivStyled = styled.div`
  display: inline-block;
  position: relative;
  height: ${getContainerSize}px;
  width: ${getContainerSize}px;
  top: ${getContainerTop}px;
`;

const SquareIconSvgStyled = styled.svg`
  fill: ${getSVGFill};
  user-select: none;
  margin: 0 auto;
`;

export { SquareIconDivStyled, SquareIconSvgStyled };
