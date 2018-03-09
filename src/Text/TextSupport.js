// @flow

import { css } from 'styled-components';
import pick from 'ramda/src/pick';
import cssConstants from './css';
import type { TextProps, StyleProps, ColorProps } from './TextTypes';
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
  subtitle: 'textSubtitle',
};

const getPriorityPropObject = supportBooleanNameGroup(
  priorityGroupName,
  priorityBooleanAttributeGroup,
);

const supportedUpperCasedPriorities = ['h200', 'subtitle'];
const upperCasedPriorities = arrayToObject(supportedUpperCasedPriorities);

const getTextTransformSupport = (priorityName: string) => {
  const isUpperCased = upperCasedPriorities[priorityName];
  return isUpperCased
    ? css`
        text-transform: uppercase;
      `
    : null;
};

const getTextPropSupport = (props: TextProps) => {
  const priority = getPriorityPropObject(props);
  const { children, color } = props;
  const textSpanStyledProps = {
    color,
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
  const { color } = props;
  return color
    ? css`
        color: ${color};
      `
    : null;
};

const getTextStyleSupport = (props: StyleProps) => {
  const priorityName = props[priorityGroupName];
  const picked = pick(priorityBooleanAttributeGroup, cssConstants);
  const baseSupport = Object(picked[priorityName]);
  const themeSupport = getThemeSupport(props, priorityName);
  const headingSupport = getHeadingSupport(priorityName);
  const colorSupport = getColorSupport(props);
  const textTransformSupport = getTextTransformSupport(priorityName);
  return css`
    ${baseSupport};
    ${themeSupport};
    ${headingSupport};
    ${colorSupport};
    ${textTransformSupport};
  `;
};

export { getTextPropSupport, getTextStyleSupport };
