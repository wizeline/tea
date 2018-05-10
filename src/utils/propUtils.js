// @flow

import { supportedPropNames } from './constants';
import { getObjectSupport } from './objectUtils';

const propNames = getObjectSupport(supportedPropNames);

const propOrTheme = (themeName: string, propName: string): Function => (
  props: Object,
) => (props[propName] ? props[propName] : props.theme[themeName]);

const curryPropParsers = (...parsers: Array<Function>) => (props: Object) => {
  const toObject = (acc, parsedProps) => ({
    ...acc,
    ...parsedProps,
  });
  return parsers.map(parser => parser(props)).reduce(toObject, {});
};

const getThemeProp = (prop: string) => ({ theme }: { theme: Object }): string =>
  theme[prop];

export { curryPropParsers, propNames, propOrTheme, getThemeProp };
