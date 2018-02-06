// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import constants from './CircleIconConstants';
import {
  supportOr,
  propNames,
  cssProperties,
  supportOrTheme,
  toPixels,
} from '../../utils';

const { circleDiameters, defaultSize } = constants;
const { size, background } = propNames;
const { width, height } = cssProperties;

const sizeMapping = sizeName => toPixels(circleDiameters[sizeName]);
const sizeSupport = supportOr(
  size,
  circleDiameters[defaultSize],
  sizeMapping,
  width,
  height,
);

const backgroundSupport = supportOrTheme(background, 'backgroundPrimary');

const CircleIconBase = styled.div`
  display: inline-block;
  text-align: center;
  border-radius: 50%;
`;

const CircleIconStyled = CircleIconBase.extend`
  ${sizeSupport} ${backgroundSupport};
`;

export default CircleIconStyled;
