// @flow

import pick from 'ramda/src/pick';
import css from './css';
import type { TextProps, ChildrenRelatedProps, StyleProps } from './TextTypes';

const priorityGroupName = 'priority';

const priorityBooleanAttributeGroup = [
  'h600',
  'h500',
  'h400',
  'h300',
  'h200',
  'b150',
  'b100',
  'b50',
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

const getStyleSupport = (props: StyleProps) => {
  const key = props[priorityGroupName];
  const cssSupport = pick(priorityBooleanAttributeGroup, css);
  return cssSupport[key];
};

export { getPropSupport, getStyleSupport };
