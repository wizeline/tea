// @flow

import reduce from 'ramda/src/reduce';
import { multipleTruthyKeyError } from './constants';

const arrayToObject = (array: Array<string>) => {
  const toObject = (acc, arrayElement) => ({ ...acc, [arrayElement]: true });
  return reduce(toObject, {}, array);
};

const getTruthyKey = (obj: Object): ?string => {
  const truthyKeys = Object.keys(obj).filter(key => Boolean(obj[key]));
  if (truthyKeys.length > 1) {
    const reason = truthyKeys.map(key => `'${key}'`).join(', ');
    const errorMessage = `${multipleTruthyKeyError} [${reason}]`;
    throw new Error(errorMessage);
  }
  return truthyKeys[0];
};

const getObjectSupport = (names: Array<string>, mapping?: Function): Object =>
  names.reduce(
    (acc: Object, name: string) => ({
      ...acc,
      [name]: mapping ? mapping(name) : name,
    }),
    {},
  );

const supportBooleanNameGroup = (
  groupName: string,
  names: Array<string>,
  defaultName?: string,
) => (props: Object) => {
  const activeName = names.find(name => props[name]);
  if (activeName) {
    return { [groupName]: activeName };
  }
  return defaultName ? { [groupName]: defaultName } : {};
};

export {
  arrayToObject,
  getTruthyKey,
  getObjectSupport,
  supportBooleanNameGroup,
};
