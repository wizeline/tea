import styled from 'styled-components';
import * as colors from '../../styles/themes/colors';

const defaultIconSize = '16px';

const IconDivStyled = styled.div`
  display: inline-block;
  position: relative;
  height: ${ props => props.size || defaultIconSize };
  width: ${ props => props.size || defaultIconSize };
  vertical-align: middle;
`;

const IconSvgStyled = styled.svg`
  fill: ${ props => props.fill || colors.text.iconDefaultInverse };
  user-select: none;
  &:hover {
    fill: ${ props => props.hoverFill || colors.text.iconDefaultInverseHover };
  }
`;

export { IconDivStyled, IconSvgStyled };
