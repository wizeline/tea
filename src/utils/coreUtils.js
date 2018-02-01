// @flow

import multipleTruthyKeyError from './coreUtilsConstants';

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

export { getTruthyKey, curryPropParsers };