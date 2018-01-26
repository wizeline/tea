// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import type {
  SVGFillProps,
  ContainerSizeProps,
  ContainerTopProps,
} from './SVGIconTypes';
import constants from './SVGIconConstants';

const getSVGFill = ({
  iconFillColor: iconFillColor = constants.defaultFillColor,
}: SVGFillProps) => iconFillColor;

const getContainerTop = ({ top }: ContainerTopProps) => top;
const getContainerSize = ({ size }: ContainerSizeProps) =>
  constants.sizes[size] || constants.sizes[constants.defaultSizeKey];

const SVGIconDivStyled = styled.div`
  display: inline-block;
  position: relative;
  height: ${getContainerSize}px;
  width: ${getContainerSize}px;
  top: ${getContainerTop}px;
`;

const SVGIconSvgStyled = styled.svg`
  fill: ${getSVGFill};
  user-select: none;
  margin: 0 auto;
`;

export { SVGIconDivStyled, SVGIconSvgStyled };
