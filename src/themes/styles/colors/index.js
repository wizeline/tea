// @flow
/* eslint flowtype-errors/enforce-min-coverage: 0 */

import color from 'color';

import blue from './blue';
import ink from './ink';
import green from './green';
import orange from './orange';
import purple from './purple';
import red from './red';
import silver from './silver';

const white = color('#FFFFFF');

export default {
  ...blue,
  ...ink,
  ...green,
  ...orange,
  ...purple,
  ...red,
  ...silver,
  white,
};
