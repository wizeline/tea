// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import pick from 'ramda/src/pick';
import { propNames, supportSizes } from '../../utils';
import type { IconPropTypes } from './IconPropTypes';

const { color, background } = propNames;

const getChildProps = (iconProps: IconPropTypes): Object => {
  const colorSupport = pick([color, background], iconProps);
  return {
    ...colorSupport,
  };
};

const enhanced = supportSizes(getChildProps);

export default enhanced;
