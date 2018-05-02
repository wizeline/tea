// @flow

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
import type { CircleIconProps } from './CircleIconTypes';

const { circleDiameters, sizes } = constants;
const { size, background } = propNames;
const { width, height } = cssProperties;

const sizeMapping = sizeName => toPixels(circleDiameters[sizeName]);
const sizeSupport = supportOr(
  size,
  circleDiameters[sizes.small],
  sizeMapping,
  width,
  height,
);

const booleanSizeSupport = (props: CircleIconProps) => {
  const { medium, large } = props;
  if (medium) {
    return sizeSupport({ size: sizes.medium });
  }
  if (large) {
    return sizeSupport({ size: sizes.large });
  }
  return sizeSupport({ size: sizes.small });
};

const backgroundSupport = supportOrTheme(background, 'backgroundPrimary');

const CircleIconBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const CircleIconStyled = CircleIconBase.extend`
  /* ${sizeSupport}; */
  ${booleanSizeSupport};
  ${backgroundSupport};
`;

CircleIconStyled.defaultProps = {
  theme: defaultIconTheme,
};

export default CircleIconStyled;
