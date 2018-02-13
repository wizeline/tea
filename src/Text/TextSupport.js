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
  'subtitle',
];

const themeMapping = {
  body: 'textBody',
  error: 'textError',
  heading: 'textHeading',
  link: 'textLink',
  subtitle: 'textSubtitle',
};

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
  const { h200, subtitle, children } = props;
  if (h200 || subtitle) {
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
const bodiesObject = arrayToObject(supportedBodies);

const getThemeSupport = (props: Object, priorityKey: string) => {
  let themeLookup;
  if (bodiesObject[priorityKey]) {
    themeLookup = 'body';
  } else if (headingsObject[priorityKey]) {
    themeLookup = 'heading';
  } else {
    themeLookup = priorityKey;
  }

  const themeColor = props.theme[themeMapping[themeLookup]];
  return themeColor
    ? css`
        color: ${themeColor};
      `
    : null;
};

const isHeading = (priorityName: string) => headingsObject[priorityName];
const { heading } = cssConstants;
const getHeadingSupport = (priorityName: string) =>
  isHeading(priorityName) ? heading : null;

const getStyleSupport = (props: StyleProps) => {
  const priorityName = props[priorityGroupName];
  const picked = pick(priorityBooleanAttributeGroup, cssConstants);
  const baseSupport = Object(picked[priorityName]);
  const themeSupport = getThemeSupport(props, priorityName);
  const headingSupport = getHeadingSupport(priorityName);
  return css`
    ${baseSupport};
    ${themeSupport};
    ${headingSupport};
  `;
};

export { getPropSupport, getStyleSupport };
