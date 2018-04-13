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
import defaultIconTheme from '../../themes/defaultTheme/components/Icon';

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
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const CircleIconStyled = CircleIconBase.extend`
  ${sizeSupport};
  ${backgroundSupport};
`;

CircleIconStyled.defaultProps = {
  theme: defaultIconTheme,
};

export default CircleIconStyled;
