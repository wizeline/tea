// @flow

import { css } from 'styled-components';
import { getTextStyleSupport } from '../Text/TextSupport';
import { supportBooleanNameGroup } from '../utils';
import type { ButtonLinkProps } from './ButtonLinkTypes';

const priorityPropName = 'priority';
const supportedPriorities = ['b50', 'b100', 'b150', 'h300'];
const defaultPriority = 'b100';

const getButtonLinkPropSupport = (props: ButtonLinkProps) => {
  const { children, ...otherProps } = props;
  const priority = supportBooleanNameGroup(
    priorityPropName,
    supportedPriorities,
    defaultPriority,
  )(otherProps);
  const linkAnchorStyledProps = {
    ...priority,
  };
  return {
    children,
    linkAnchorStyledProps,
  };
};

const getButtonLinkStyleSupport = (props: ButtonLinkProps) => {
  const color = props.color ? props.color : props.theme.textLink;
  const colorOverride = `color: ${color};`;
  return css`
    ${getTextStyleSupport};
    ${colorOverride};
  `;
};

export { getButtonLinkPropSupport, getButtonLinkStyleSupport };
