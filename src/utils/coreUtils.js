// @flow

import { css } from 'styled-components';
import {
  multipleTruthyKeyError,
  supportedCssProps,
  supportedPropNames,
} from './coreUtilsConstants';

const lispToCamelCase = (word: string) =>
  word
    .split('-')
    .reduce(
      (result, token) =>
        result + token.replace(/^\w/, chr => chr.toUpperCase()),
    );

const camelToLispCase = (word: string) =>
  word.replace(/([A-Z])/g, '-($1).toLowerCase()');

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

const propOr = (defaultValue: string, propName: string) => (props: Object) =>
  props[propName] ? props[propName] : defaultValue;

const toPixels = (val: any) => `${val}px`;
const supportOr = (
  input: string,
  defaultOut: any,
  mapping: Function,
  ...outputs: Array<string>
) => (props: Object) => {
  const value = props[input] ? props[input] : defaultOut;
  const mappedValue = mapping ? mapping(value) : value;
  const targets = outputs.length ? outputs : [input];
  const generated = targets
    .map(target => `${target}: ${mappedValue};`)
    .join('\n');

  return css`
    ${generated};
  `;
};

export {
  cssProperties,
  curryPropParsers,
  getTruthyKey,
  lispToCamelCase,
  propNames,
  propOr,
  propOrTheme,
  supportOr,
  toPixels,
};
