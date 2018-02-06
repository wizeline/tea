// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import propOr from 'ramda/src/propOr';
import styled, { css } from 'styled-components';
import constants from '../SVGIconConstants';
import { cssProperties } from '../../../utils';

const { defaultSizeKey, defaultTop, sizes } = constants;
const { top } = cssProperties;

const sizeSupport = ({ size }) => {
  const sizeValue = sizes[size] || sizes[defaultSizeKey];
  return () =>
    css`
      width: ${sizeValue}px;
      height: ${sizeValue}px;
    `;
};

const SVGIconDivBase = styled.div`
  display: inline-block;
  position: relative;
  top: ${propOr(defaultTop, top)}px;
`;

const SVGIconDivStyled = SVGIconDivBase.extend`
  ${sizeSupport};
`;

export default SVGIconDivStyled;
