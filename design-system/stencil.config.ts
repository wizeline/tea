import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'wizeline-tea',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
      serviceWorker: false,
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/css/globals/mixins.scss',
        'src/css/globals/variables.scss',
        'src/css/reset.scss',
      ],
    }),
  ],
};

export const devServer = {
  root: 'www',
  watchGlob: '**/**',
};
