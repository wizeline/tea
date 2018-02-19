// @flow

import { supportedPropNames } from './constants';
import { getObjectSupport } from './objectUtils';

const propNames = getObjectSupport(supportedPropNames);

const propOrTheme = (themeName: string, propName: string): Function => (
  props: Object,
) => (props[propName] ? props[propName] : props.theme[themeName]);

const curryPropParsers = (...parsers: Array<Function>) => (props: Object) => {
  const reducer = (accumulator, currentValue) => ({
    ...accumulator,
    ...currentValue,
  });
  return parsers.map(parser => parser(props)).reduce(reducer, {});
};

export { curryPropParsers, propNames, propOrTheme };
