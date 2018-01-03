// @flow

import styled, { css } from 'styled-components';
import * as colors from '../../styles/themes/colors';
import * as fonts from '../../styles/themes/fonts';
import * as constants from './Button.constants.js';
import { Transitions } from '../../cssUtilities';

const getFirstTruthyKey = (object, orderedKeys, defaultKey) => {
  let result = defaultKey;
  orderedKeys.forEach((key) => {
    if (object[key]) {
      result = key;
    }
  });
  return result;
};

const isButtonDisabled = (props) => {
  const { disabled, ...otherProps } = props;
  return Boolean(disabled);
};

const getButtonSize = (props) => {
  const { xlarge, large, medium, small, xsmall, ...otherProps } = props;
  const sizeFlags = { xlarge, large, medium, small, xsmall };
  const sizeFlagOrder = [ 'xsmall', 'small', 'medium', 'large', 'xlarge' ];
  const defaultSize = 'medium';
  return getFirstTruthyKey(sizeFlags, sizeFlagOrder, defaultSize);
};

const getButtonPriority = (props) => {
  const { primary, secondary, destructive, ...otherProps } = props;
  const priorityFlags = { primary, secondary, destructive };
  const priorityFlagOrder = ['destructive', 'secondary', 'primary' ];
  const defaultPriority = 'primary';
  return getFirstTruthyKey(priorityFlags, priorityFlagOrder, defaultPriority);
};

const getButtonSizeStyle = (size, hasText ) => {
  const result = hasText ?
    constants.sizesWithText[size] :
    constants.sizesWithoutText[size];
  return result;
};
const getButtonColorStyle = (priority) => { return constants.priorityColors[priority] };

const getButtonStyle = (props) => {
  const { disabled } = props;

  const priority = getButtonPriority(props);
  const colorStyle = getButtonColorStyle(priority);

  const iconStyleProps = { size: '16px' };
  const iconWrapperStyleProps = {};

  const hasChildren = Boolean(props.children);
  const hasIcon = Boolean(props.icon);
  if (hasIcon) {
    if (hasChildren) {
      iconWrapperStyleProps.marginRight = 8;
    }
    const { color, colorHover, colorDisabled } = colorStyle;
    iconStyleProps.fill = disabled ? colorDisabled : color;
    iconStyleProps.hoverFill = disabled ? colorDisabled : colorHover;
  }

  const hasText = hasChildren;
  const size = getButtonSize(props);
  const sizeStyle = getButtonSizeStyle(size, hasText);

  const buttonStyleProps = { ...colorStyle, disabled, ...sizeStyle };
  return { buttonStyleProps, iconStyleProps, iconWrapperStyleProps };
};

const ButtonBaseStyled = css`
  background-color: ${
    props => props.backgroundColor || colors.background.buttonPrimary
  };
  border-color: ${
    props => props.borderColor || colors.border.buttonPrimary
  };
  border-radius: ${ props => props.borderRadius || 3}px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.03);
  color: ${ props => props.color || colors.text.buttonPrimary };
  cursor: pointer;
  font-size: ${ props => props.fontSize || fonts.size.default }px;
  font-weight: ${ props => props.fontWeight || 600};
  height: ${ props => props.height || 32}px;
  min-width: ${ props => props.minWidth || null }px;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: center;
  transition: ${Transitions.easeOut()};
  vertical-align: middle;
`;

const ButtonStyled = styled.button`
  ${ButtonBaseStyled}

  &:hover {
    background-color: ${
      props => props.backgroundColorHover ||
      colors.background.buttonPrimaryHover
    };
    border-color: ${
      props => props.borderColorHover || colors.border.buttonPrimaryHover
    };
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    background-color: ${
      props => props.backgroundColorDisabled ||
        colors.background.buttonPrimaryDisabled
    };
    border-color: ${
      props => props.borderColorDisabled ||
        colors.border.buttonPrimaryDisabled
    };
    color: ${colors.text.buttonPrimaryDisabled};
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
