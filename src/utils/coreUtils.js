// @flow

import reduce from 'ramda/src/reduce';
import { css } from 'styled-components';
import {
  multipleTruthyKeyError,
  supportedCssProps,
  supportedPropNames,
} from './coreUtilsConstants';

const camelToLispCase = (word: string) =>
  word.replace(/([A-Z])/g, captureGroup => `-${captureGroup.toLowerCase()}`);

const getTruthyKey = (obj: Object): ?string => {
  const truthyKeys = Object.keys(obj).filter(key => Boolean(obj[key]));
  if (truthyKeys.length > 1) {
    const reason = truthyKeys.map(key => `'${key}'`).join(', ');
    const errorMessage = `${multipleTruthyKeyError} [${reason}]`;
    throw new Error(errorMessage);
  }
  return truthyKeys[0];
};

const curryPropParsers = (...parsers: Array<Function>) => (props: Object) => {
  const reducer = (accumulator, currentValue) => ({
    ...accumulator,
    ...currentValue,
  });
  return parsers.map(parser => parser(props)).reduce(reducer, {});
};

const getObjectSupport = (names: Array<string>, mapping?: Function): Object => {
  const result = {};
  names.forEach((name: string) => {
    result[name] = mapping ? mapping(name) : name;
  });
  return result;
};

const cssProperties = getObjectSupport(supportedCssProps, camelToLispCase);
const propNames = getObjectSupport(supportedPropNames);

const propOrTheme = (themeName: string, propName: string): Function => (
  props: Object,
) => (props[propName] ? props[propName] : props.theme[themeName]);

const toPixels = (val: any) => (val ? `${val}px` : '0px');

const supportOr = (
  input: string,
  defaultOutput: any,
  mapping: Function,
  ...outputs: Array<string>
) => (props: Object) => {
  const value = props[input] || defaultOutput;
  const mappedValue = mapping(value);
  const targets = outputs.length ? outputs : [input];
  const generated = targets
    .map(target => `${target}: ${mappedValue};`)
    .join('\n');

  return css`
    ${generated};
  `;
};

const supportOrTheme = (input: string, defaultThemePropName: string) => (
  props: Object,
) => {
  const propertyValue = props[input] || props.theme[defaultThemePropName];
  const generated = [input]
    .map(propertyName => `${propertyName}: ${propertyValue};`)
    .join('\n');

  return css`
    ${generated};
  `;
};

const warn = (warning: string) => {
  /* eslint-disable no-console */
  console.warn(warning);
  /* eslint-enable no-console */
};

const supportBooleanNameGroup = (groupName: string, names: Array<string>) => (
  props: Object,
) => {
  const activeName = names.find(name => props[name]);
  return activeName ? { [groupName]: activeName } : {};
};

const arrayToObject = (array: Array<string>) => {
  const accumulator = (a, b) => ({ ...a, [b]: true });
  return reduce(accumulator, {}, array);
};

export {
  arrayToObject,
  cssProperties,
  curryPropParsers,
  getTruthyKey,
  camelToLispCase,
  propNames,
  propOrTheme,
  supportBooleanNameGroup,
  supportOr,
  supportOrTheme,
  toPixels,
  warn,
};
