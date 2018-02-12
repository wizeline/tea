// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled, { css } from 'styled-components';
import Transitions from '../../cssUtilities';
import type { ButtonStyleProps } from './ButtonTypes';

const theme = (name: string) => (props: Object) => props.theme[name];

const disabledCursor = css`
  cursor: not-allowed;
`;

const primary = css`
  background-color: ${theme('backgroundPrimary')};
  border-color: ${theme('borderPrimary')};
  color: ${theme('textPrimary')};

  &:disabled,
  &[disabled] {
    ${disabledCursor};
    background-color: ${theme('backgroundPrimaryDisabled')};
    border-color: ${theme('borderPrimaryDisabled')};
    color: ${theme('textPrimaryDisabled')};
  }
`;

const secondary = css`
  background-color: ${theme('backgroundSecondary')};
  border-color: ${theme('borderSecondary')};
  color: ${theme('textSecondary')};

  &:disabled,
  &[disabled] {
    ${disabledCursor};
    background-color: ${theme('backgroundSecondaryDisabled')};
    border-color: ${theme('borderSecondaryDisabled')};
    color: ${theme('textSecondaryDisabled')};
  }
`;

const danger = css`
  background-color: ${theme('backgroundDanger')};
  border-color: ${theme('borderDanger')};
  color: ${theme('textDanger')};

  &:disabled,
  &[disabled] {
    ${disabledCursor};
    background-color: ${theme('backgroundDangerDisabled')};
    border-color: ${theme('borderDangerDisabled')};
    color: ${theme('textDangerDisabled')};
  }
`;

const small = css`
  width: 72px;
  height: 24px;
`;

const medium = css`
  width: 100px;
  height: 32px;
`;

const large = css`
  width: 164px;
  height: 48px;
`;

const cssSupport = {
  primary,
  secondary,
  danger,
  small,
  medium,
  large,
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
  border-radius: ${props => props.borderRadius || 3}px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.03);
  cursor: pointer;
  font-size: ${props => props.fontSize /* || fonts.size.default */}px;
  font-weight: ${props => props.fontWeight || 600};
  height: ${props => props.height || 32}px;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: center;
  transition: ${Transitions.easeOut()};
  vertical-align: middle;
`;

const supportProp = (propName: string) => props => {
  if (props) {
    const propStyle = props[propName];
    const isPropSupported = propStyle;
    return isPropSupported ? cssSupport[propStyle] : null;
  }
  return null;
};

const ButtonStyled = styled.button`
  ${ButtonBaseStyled};
  ${supportProp('priority')};
  ${supportProp('size')};
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
