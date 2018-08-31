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
  globalStyle: 'src/css/globals/variables.scss',
  minifyCss: true,
  minifyJs: true,
  plugins: [
    sass({
      injectGlobalPaths: ['src/css/globals/mixins.scss'],
    }),
  ],
};

export const devServer = {
  root: 'www',
  watchGlob: '**/**',
};
