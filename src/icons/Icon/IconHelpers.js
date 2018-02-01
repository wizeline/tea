// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import pick from 'ramda/src/pick';
import pipe from 'ramda/src/pipe';
import propKeys from './IconConstants';
import { getTruthyKey, pickSizes } from '../../utils/coreUtils';
import type { IconPropTypes } from './IconPropTypes';

const getSize = pipe(pickSizes, getTruthyKey);

const getChildProps = (iconProps: IconPropTypes) => {
  const { NAME, COLOR, BACKGROUND } = propKeys;
  const { name } = pick([NAME], iconProps);
  const size = getSize(iconProps);
  const colors = pick([COLOR, BACKGROUND], iconProps);
  return { name, size, ...colors };
};

export default getChildProps;
