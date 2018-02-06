// @flow

import {
  multipleTruthyKeyError,
  supportedCssProps,
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

const getSupportedCssProps = () => {
  const result = {};
  supportedCssProps.forEach(prop => {
    result[prop] = camelToLispCase(prop);
  });
  return result;
};

const cssProperties = getSupportedCssProps();

const propOrTheme = (themeName: string, propName: string): Function => (
  props: Object,
) => (props[propName] ? props[propName] : props.theme[themeName]);

export {
  getTruthyKey,
  curryPropParsers,
  cssProperties,
  lispToCamelCase,
  propOrTheme,
};
