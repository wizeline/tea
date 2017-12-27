import styled from 'styled-components';
import colors from '../../styles/themes/colors';

const IconDivStyled = styled.div`
  border-style: solid;
  position: relative;
  height: ${props => props.size || '32px'};
  width: ${props => props.size || '32px'};
`;

const IconSvgStyled = styled.svg`
  fill: ${colors.steelGrey};
  user-select: none;
  &:hover {
    fill: ${colors.darkSkyBlue};
  }
`;

export { IconDivStyled, IconSvgStyled };
