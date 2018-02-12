// @flow

import { css } from 'styled-components';
import pick from 'ramda/src/pick';
import cssConstants from './css';
import type { TextProps, ChildrenRelatedProps, StyleProps } from './TextTypes';

const arrayToObject = (arr: Array<string>) => {
  const result = {};
  arr.forEach(name => {
    result[name] = true;
  });
  return result;
};

const priorityGroupName = 'priority';

const supportedHeadings = ['h600', 'h500', 'h400', 'h300', 'h200'];

const supportedBodies = ['b150', 'b100', 'b50'];

const priorityBooleanAttributeGroup = [
  ...supportedHeadings,
  ...supportedBodies,
  'error',
  'short',
  'long',
];

const supportBooleanNameGroup = (groupName: string, names: Array<string>) => (
  props: Object,
) => {
  let activeName;
  names.some(name => {
    if (props[name]) {
      activeName = name;
      return true;
    }
    return false;
  });
  return activeName ? { [groupName]: activeName } : {};
};

const getPriorityPropObject = supportBooleanNameGroup(
  priorityGroupName,
  priorityBooleanAttributeGroup,
);

const getChildren = (props: ChildrenRelatedProps) => {
  const { h200, children } = props;
  if (h200) {
    return String(children).toUpperCase();
  }
  return children;
};

const getPropSupport = (props: TextProps) => {
  const priority = getPriorityPropObject(props);
  const children = getChildren(props);
  return {
    priority,
    children,
  };
};

const headingsObject = arrayToObject(supportedHeadings);
const isHeading = (priorityName: string) => headingsObject[priorityName];
const { heading } = cssConstants;

const getStyleSupport = (props: StyleProps) => {
  const key = props[priorityGroupName];
  const picked = pick(priorityBooleanAttributeGroup, cssConstants);
  const cssSupport = Object(picked[key]);

  if (isHeading(key)) {
    return css`
      ${cssSupport};
      ${heading};
    `;
  }
  return cssSupport;
};

export { getPropSupport, getStyleSupport };
