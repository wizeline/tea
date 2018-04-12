// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import constants from '../SVGIconConstants';
import { cssProperties, propNames, supportOr, toPixels } from '../../../utils';

const SVGIconDivBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const { sizes, defaultSizeKey, defaultTop } = constants;
const { top, width, height } = cssProperties;
const { size } = propNames;

const topSupport = supportOr(top, defaultTop, toPixels);
const sizeMapping = sizeName =>
  toPixels(sizes[sizeName] || sizes[defaultSizeKey]);

const sizeSupport = supportOr(size, defaultSizeKey, sizeMapping, width, height);

const SVGIconDivStyled = SVGIconDivBase.extend`
  ${sizeSupport};
  ${topSupport};
`;

export default SVGIconDivStyled;
