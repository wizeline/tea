// @flow

import styled from 'styled-components';
import constants from '../SVGIconConstants';
import { cssProperties, propNames, supportOr, toPixels } from '../../../utils';
import type { SVGIconProps } from '../SVGIconTypes';

const SVGIconDivBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const { sizes, defaultSizeKey, defaultTop, sizeNames } = constants;
const { top, width, height } = cssProperties;
const { size } = propNames;

const topSupport = supportOr(top, defaultTop, toPixels);
const sizeMapping = sizeName => toPixels(sizes[sizeName]);

const sizeSupport = supportOr(size, defaultSizeKey, sizeMapping, width, height);

const booleanSizeSupport = ({ xlarge, large, medium, small }: SVGIconProps) => {
  if (small) {
    return sizeSupport({ size: sizeNames.small });
  }
  if (medium) {
    return sizeSupport({ size: sizeNames.medium });
  }
  if (large) {
    return sizeSupport({ size: sizeNames.large });
  }
  if (xlarge) {
    return sizeSupport({ size: sizeNames.xlarge });
  }
  return sizeSupport({ size: sizeNames.xsmall });
};

const SVGIconDivStyled = SVGIconDivBase.extend`
  ${topSupport};
  ${booleanSizeSupport};
`;

export default SVGIconDivStyled;
