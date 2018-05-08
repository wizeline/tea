// @flow

import Link from '../Link/LinkStyled';

const BaseButtonLinkStyled = Link.withComponent('button');

const ButtonLinkStyled = BaseButtonLinkStyled.extend`
  border: none;
  display: inline;
  background: transparent;
`;

export default ButtonLinkStyled;
