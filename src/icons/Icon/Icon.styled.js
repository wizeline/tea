import styled from 'styled-components';
import * as colors from '../../styles/themes/colors';

const defaultIconSize = '16px';

const CircleIconStyled = styled.div`
  display: inline-block;
  border-radius: 50%;
  background: ${ props => (
    props.background ? props.background : colors.background.iconCircleDefault
  )};
`;

const IconDivStyled = styled.div`
  //display: inline-block; // TODO: this needs to be toggled on when unwrapped
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

export { IconDivStyled, IconSvgStyled, CircleIconStyled };
