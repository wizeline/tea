// @flow

import pick from 'ramda/src/pick';
import pipe from 'ramda/src/pipe';
import { getTruthyKey } from '../objectUtils';
import { curryPropParsers } from '../propUtils';
import baseSizes from './sizeConstants';
import type { sizeProps } from './sizeTypes';

const pickSizes = (props: sizeProps): Object => pick(baseSizes, props);

const getSize = pipe(pickSizes, getTruthyKey);

const parseSizes = (props: sizeProps): Object => ({ size: getSize(props) });

const supportSizes = (baseParser: Function): Function =>
  curryPropParsers(baseParser, parseSizes);

export default supportSizes;
