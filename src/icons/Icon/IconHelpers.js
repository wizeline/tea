// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import pick from 'ramda/src/pick';
import propKeys from './IconConstants';
import supportSizes from '../../utils';
import type { IconPropTypes } from './IconPropTypes';

const getChildProps = (iconProps: IconPropTypes) => {
  const { NAME, COLOR, BACKGROUND } = propKeys;
  const { name } = pick([NAME], iconProps);
  const colors = pick([COLOR, BACKGROUND], iconProps);
  return { name, ...colors };
};

export default supportSizes(getChildProps);
