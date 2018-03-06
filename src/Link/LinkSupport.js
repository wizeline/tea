// @flow

import { css } from 'styled-components';
import type { LinkProps } from './LinkTypes';
import { supportBooleanNameGroup } from '../utils';
import { getTextStyleSupport } from '../Text/TextSupport';

const priorityPropName = 'priority';
const supportedPriorities = ['b50', 'b100', 'b150', 'h300'];
const defaultPriority = 'b100';

const getLinkPropSupport = (props: LinkProps) => {
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

const getLinkStyleSupport = (props: LinkProps) => {
  const color = props.theme ? props.theme.textLink : null;
  const colorOverride = color ? `color: ${color};` : '';
  return css`
    ${getTextStyleSupport};
    ${colorOverride};
  `;
};

export { getLinkPropSupport, getLinkStyleSupport };
