// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import pick from 'ramda/src/pick';
import { propNames, supportSizes } from '../../utils';
import type { IconPropTypes } from './IconPropTypes';

const { name, color, background } = propNames;

const getChildProps = (iconProps: IconPropTypes): Object => {
  const nameSupport = pick([name], iconProps);
  const colorSupport = pick([color, background], iconProps);
  return {
    ...nameSupport,
    ...colorSupport,
  };
};

const enhanced = supportSizes(getChildProps);

export default enhanced;
