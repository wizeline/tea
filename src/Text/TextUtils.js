// @flow

import constants from './TextConstants';

const singleTruthyKey = (obj: Object) => {
  const truthyKeys = Object.keys(obj).filter(key => Boolean(obj[key]));
  if (truthyKeys.length > 1) {
    const reason = truthyKeys.map(key => `'${key}'`).join(', ');
    const errorMessage = `${constants.multipleTruthyKeyError} [${reason}]`;
    throw new Error(errorMessage);
  }
  if (truthyKeys.length === 0) return undefined;
  return truthyKeys[0];
};

export default singleTruthyKey;
