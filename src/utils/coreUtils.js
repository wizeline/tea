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

type sizeProps = { [key: string]: boolean };

const pickSizes = ({ xsmall, small, medium, large, xlarge }: sizeProps) => ({
  xsmall,
  small,
  medium,
  large,
  xlarge,
});

export { getTruthyKey, pickSizes };
