// @flow

import React from 'react';
import { ButtonStyled, TextWrapperStyled } from './ButtonStyled';
import type { ButtonPropTypes } from './ButtonTypes';
import SVGIcon from '../../icons/SVGIcon';

const propGroups = {
  priority: ['primary', 'secondary', 'danger'],
  size: ['small', 'medium', 'large'],
  defaultPriority: 'primary',
  defaultSize: 'medium',
};

const supportPropGroup = (
  groupName: string,
  propGroup: Array<string>,
  inProps: Object,
  defaultProp: string,
) => {
  let truthyProp = null;
  propGroup.some(prop => {
    if (inProps[prop]) {
      truthyProp = prop;
      return true;
    }
    return false;
  });
  return { [groupName]: truthyProp || defaultProp };
};

const Button = (props: ButtonPropTypes) => {
  const { text, iconName, disabled, round } = props;
  const iconComponent = iconName ? <SVGIcon name={iconName} /> : null;
  const buttonStyledProps = {
    ...supportPropGroup(
      'priority',
      propGroups.priority,
      props,
      propGroups.defaultPriority,
    ),
    ...supportPropGroup('size', propGroups.size, props, propGroups.defaultSize),
    disabled,
    round,
  };

  const labelComponent =
    text && !round ? <TextWrapperStyled>{text}</TextWrapperStyled> : null;
  return (
    <ButtonStyled {...buttonStyledProps}>
      {iconComponent}
      {labelComponent}
    </ButtonStyled>
  );
};

export default Button;
