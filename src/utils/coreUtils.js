// @flow

import multipleTruthyKeyError from './coreUtilsConstants';

const pick = (obj: Object, ...keys: Array<string>): Object => {
  if (!keys) return {};
  const result = {};
  keys.forEach(key => {
    result[key] = obj[key];
  });
  return result;
};

const pipe = (initial: any, ...funcs: Array<Function>): any => {
  let result = initial;
  funcs.forEach(func => {
    result = func(result);
  });
  return result;
};

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

export { pick, pipe, getTruthyKey };
