import * as modules from './modules';

Object.entries(modules).forEach(([key, module]) => {
  Object.keys(module).forEach((component) => {
    global[component] = module[component];
  });
});
