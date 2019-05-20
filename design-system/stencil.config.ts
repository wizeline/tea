import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'wizeline-tea',
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader' },
    { type: 'docs-readme' },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  globalStyle: 'src/css/globals/global.scss',
  minifyCss: true,
  minifyJs: true,
  plugins: [
    sass({
      injectGlobalPaths: ['src/css/globals/mixins.scss'],
    }),
  ],
};
