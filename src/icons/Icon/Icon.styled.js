import styled from 'styled-components';
import colors from '../../styles/themes/colors';

const defaultIconSize = '16px';

const IconDivStyled = styled.div`
  position: relative;
  height: ${ props => props.size || defaultIconSize };
  width: ${ props => props.size || defaultIconSize };
`;

const IconSvgStyled = styled.svg`
  fill: ${ colors.steelGrey };
  user-select: none;
  &:hover {
    fill: ${ colors.darkSkyBlue };
  }
`;

export { IconDivStyled, IconSvgStyled };
