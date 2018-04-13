// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';
import constants from '../SVGIconConstants';
import { propOrTheme, cssProperties } from '../../../utils';
import defaultIconTheme from '../../../themes/defaultTheme/components/Icon';

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
  width: 100%;
  height: auto;
`;

SVGIconSvgStyled.defaultProps = {
  theme: defaultIconTheme,
};

export default SVGIconSvgStyled;
