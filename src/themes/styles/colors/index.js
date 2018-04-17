// @flow
/* eslint flowtype-errors/enforce-min-coverage: 0 */

import color from 'color';

import blue from './blue';
import darkGray from './darkGray';
import green from './green';
import orange from './orange';
import purple from './purple';
import red from './red';
import silver from './silver';

const white = color('#FFFFFF');

export default {
  ...blue,
  ...darkGray,
  ...green,
  ...orange,
  ...purple,
  ...red,
  ...silver,
  white,
};
