// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import constants from '../SVGIconConstants';
import { propOrTheme, cssProperties } from '../../../utils';

const {
  defaultFillColorThemeName,
  defaultInvertFillColorThemeName,
} = constants;
const { fill } = cssProperties;
const fillWithDefault = propOrTheme(defaultFillColorThemeName, fill);
const fillWithInvertDefault = propOrTheme(
  defaultInvertFillColorThemeName,
  fill,
);
const getFill = ({ invert }) =>
  invert ? fillWithInvertDefault : fillWithDefault;

const SVGIconSvgStyled = styled.svg`
  fill: ${getFill};
  user-select: none;
  margin: 0 auto;
`;

export default SVGIconSvgStyled;
