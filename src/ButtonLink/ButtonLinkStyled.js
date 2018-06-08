// @flow

import Link from '../Link/LinkStyled';
import type { ButtonLinkProps } from './ButtonLinkTypes';

const getSVGFill = ({ color, theme }: ButtonLinkProps): string =>
  color || theme.textLink;

const BaseButtonLinkStyled = Link.withComponent('button');

const ButtonLinkStyled = BaseButtonLinkStyled.extend`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;

  & svg {
    fill: ${getSVGFill};
  }
`;

export default ButtonLinkStyled;
