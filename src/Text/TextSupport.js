// @flow

import { css } from 'styled-components';
import pick from 'ramda/src/pick';
import cssConstants from './css';
import type {
  TextProps,
  ChildrenRelatedProps,
  StyleProps,
  ColorProps,
} from './TextTypes';
import { arrayToObject, supportBooleanNameGroup } from '../utils';

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

const getPriorityPropObject = supportBooleanNameGroup(
  priorityGroupName,
  priorityBooleanAttributeGroup,
);

const toUpperCase = (str: string) => str.toUpperCase();

const getChildSupport = (props: ChildrenRelatedProps) => {
  const { h200, subtitle, children } = props;
  if (h200 || subtitle) {
    if (Array.isArray(children)) {
      return children.map(toUpperCase);
    }
    return toUpperCase(String(children));
  }
  return children;
};

const getPropSupport = (props: TextProps) => {
  const priority = getPriorityPropObject(props);
  const children = getChildSupport(props);
  const { color, isLink } = props;
  const textSpanStyledProps = {
    color,
    isLink,
    ...priority,
  };
  return {
    textSpanStyledProps,
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

const getColorSupport = (props: ColorProps) => {
  const { color, isLink } = props;
  let result;
  if (color) {
    result = color;
  } else if (isLink) {
    result = props.theme.textLink;
  }
  return result
    ? css`
        color: ${result};
      `
    : null;
};

const getStyleSupport = (props: StyleProps) => {
  const priorityName = props[priorityGroupName];
  const picked = pick(priorityBooleanAttributeGroup, cssConstants);
  const baseSupport = Object(picked[priorityName]);
  const themeSupport = getThemeSupport(props, priorityName);
  const headingSupport = getHeadingSupport(priorityName);
  const colorSupport = getColorSupport(props);

  return css`
    ${baseSupport};
    ${themeSupport};
    ${headingSupport};
    ${colorSupport};
  `;
};

export { getPropSupport, getStyleSupport };
