// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import * as colors from '../styles/themes/colors';

type SVGFillProps = {
  [fill: string]: string,
};

type ContainerSizeProps = {
  [iconSize: string]: number,
};

const getSVGFill = ({
  iconFillColor: iconFillColor = colors.text.iconDefaultInverse,
}: SVGFillProps) => iconFillColor;

const getContainerSize = ({ iconSize }: ContainerSizeProps) => iconSize;

const IconDivStyled = styled.div`
  display: inline-block;
  position: relative;
  height: ${getContainerSize}px;
  width: ${getContainerSize}px;
  vertical-align: middle;
  text-align: center;
  border: 1px solid;
`;

const IconSvgStyled = styled.svg`
  fill: ${getSVGFill};
  user-select: none;
  margin: 0 auto;
`;

export { IconDivStyled, IconSvgStyled };
