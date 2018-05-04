// @flow

import pick from 'ramda/src/pick';
import { propNames, supportSizes } from '../../utils';
import type { IconPropTypes } from './IconPropTypes';

const { color, background }: { color: string, background: string } = propNames;

const getChildProps = (
  iconProps: IconPropTypes,
): { color?: string, background?: string } => {
  const colorSupport: { color?: string, background?: string } = pick(
    [color, background],
    iconProps,
  );
  return colorSupport;
};

const enhanced = supportSizes(getChildProps);

export default enhanced;
