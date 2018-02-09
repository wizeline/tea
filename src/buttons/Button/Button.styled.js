// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled, { css } from 'styled-components';
import Transitions from '../../cssUtilities';

type ButtonStyleProps = {
  children?: React.Node,
  icon?: React.Element,
};

const getButtonStyle = (props: ButtonStyleProps) => {
  const iconStyleProps = { size: '16px' };
  const iconWrapperStyleProps = {};
  const hasChildren = Boolean(props.children);
  const hasIcon = Boolean(props.icon);
  if (hasIcon) {
    if (hasChildren) {
      iconWrapperStyleProps.marginRight = 8;
    }
  }
  return { iconStyleProps, iconWrapperStyleProps };
};

const ButtonBaseStyled = css`
  background-color: ${props =>
    props.backgroundColor || props.theme.backgroundPrimary};
  border-color: ${props => props.borderColor || props.theme.borderPrimary};
  border-radius: ${props => props.borderRadius || 3}px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.03);
  color: ${props => props.color || props.theme.textPrimary};
  cursor: pointer;
  font-size: ${props => props.fontSize /* || fonts.size.default */}px;
  font-weight: ${props => props.fontWeight || 600};
  height: ${props => props.height || 32}px;
  min-width: ${props => props.minWidth || null}px;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: center;
  transition: ${Transitions.easeOut()};
  vertical-align: middle;
`;

const ButtonStyled = styled.button`
  ${ButtonBaseStyled} &:hover {
    background-color: ${props =>
      props.backgroundColorHover || props.theme.backgroundPrimaryHover};
    border-color: ${props =>
      props.borderColorHover || props.theme.borderPrimaryHover};
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    background-color: ${props =>
      props.backgroundColorDisabled || props.theme.backgroundPrimaryDisabled};
    border-color: ${props =>
      props.borderColorDisabled || props.theme.borderPrimaryDisabled};
    color: ${props => props.theme.textPrimaryDisabled};
  }
`;

const IconWrapperStyled = styled.span`
  display: inline-block;
  margin-right: ${props => props.marginRight || 0}px;
  vertical-align: middle;
`;

const TextWrapperStyled = styled.span`
  vertical-align: middle;
`;

export { ButtonStyled, IconWrapperStyled, TextWrapperStyled, getButtonStyle };
