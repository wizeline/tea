// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import constants from '../SVGIconConstants';
import { cssProperties, propNames, supportOr, toPixels } from '../../../utils';

const SVGIconDivBase = styled.div`
  display: inline-block;
  position: relative;
`;

const { sizes, defaultSizeKey, defaultTop } = constants;
const { top, width, height } = cssProperties;
const { size } = propNames;

const sizeMapping = sizeName => toPixels(sizes[sizeName]);
const sizeSupport = supportOr(
  size,
  sizes[defaultSizeKey],
  sizeMapping,
  width,
  height,
);
const topSupport = supportOr(top, defaultTop, toPixels);

const SVGIconDivStyled = SVGIconDivBase.extend`
  ${sizeSupport} ${topSupport};
`;

export default SVGIconDivStyled;
