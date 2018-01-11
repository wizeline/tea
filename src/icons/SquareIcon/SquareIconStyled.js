// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import * as colors from '../../styles/themes/colors';

type SVGFillProps = {
  [fill: string]: string,
};

type ContainerSizeProps = {
  [iconSize: string]: number,
};

type ContainerTopProps = {
  [top: string]: number,
};

const getSVGFill = ({
  iconFillColor: iconFillColor = colors.text.iconDefaultInverse,
}: SVGFillProps) => iconFillColor;

const getContainerSize = ({ iconSize }: ContainerSizeProps) => iconSize;
const getContainerTop = ({ top }: ContainerTopProps) => top;

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
