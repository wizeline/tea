// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import type { SVGFillProps, ContainerSizeProps } from './SVGIconTypes';
import constants from './SVGIconConstants';

const getSVGFill = ({
  iconFillColor,
  theme: { textPrimaryInvert },
}: SVGFillProps) => iconFillColor || textPrimaryInvert;

const getContainerSize = ({ size }: ContainerSizeProps) =>
  constants.sizes[size] || constants.sizes[constants.defaultSizeKey];

const SVGIconDivStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${getContainerSize}px;
  width: ${getContainerSize}px;
`;

const SVGIconSvgStyled = styled.svg`
  fill: ${getSVGFill};
  user-select: none;
  margin: 0 auto;
`;

export { SVGIconDivStyled, SVGIconSvgStyled };
