// @flow

import { css } from 'styled-components';
import { getObjectSupport } from './objectUtils';
import { supportedCssProps } from './constants';
import { camelToLispCase } from './stringUtils';

const toPixels = (val: any) => (val ? `${val}px` : '0px');
const cssProperties = getObjectSupport(supportedCssProps, camelToLispCase);

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

export { cssProperties, toPixels, supportOr, supportOrTheme };
