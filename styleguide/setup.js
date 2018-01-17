// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import module from './modules';

// Setup components to reference them in readme markdown.
Object.keys(module).forEach(component => {
  global[component] = module[component];
});
