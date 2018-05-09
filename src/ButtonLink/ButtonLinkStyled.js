// @flow

import Link from '../Link/LinkStyled';
import type { ButtonLinkProps } from './ButtonLinkTypes';

const getSVGFill = ({ color, theme }: ButtonLinkProps): string =>
  color || theme.textLink;

const BaseButtonLinkStyled = Link.withComponent('button');

const ButtonLinkStyled = BaseButtonLinkStyled.extend`
  border: none;
  display: inline;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: ${getSVGFill};
  }
`;

export default ButtonLinkStyled;
