// @flow

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
  if (truthyKeys.length === 0) return undefined;
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

export {
  cssProperties,
  curryPropParsers,
  getTruthyKey,
  camelToLispCase,
  propNames,
  propOrTheme,
  supportOr,
  supportOrTheme,
  toPixels,
};
