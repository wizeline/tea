// @flow

import pick from 'ramda/src/pick';
import pipe from 'ramda/src/pipe';
import { getTruthyKey, curryPropParsers } from '../coreUtils';
import baseSizes from './sizeConstants';
import type { sizeProps } from './sizeTypes';

const pickSizes = (props: sizeProps) => pick(baseSizes, props);
const getSize = pipe(pickSizes, getTruthyKey);
const parseSizes = (props: sizeProps) => ({ size: getSize(props) });

const supportSizes = (baseParser: Function): Function =>
  curryPropParsers(baseParser, parseSizes);

export default supportSizes;
