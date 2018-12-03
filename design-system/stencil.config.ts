import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'wizeline-tea',
  outputTargets: [{ type: 'www' }, { type: 'dist' }],
  globalStyle: 'src/css/globals/global.scss',
  minifyCss: true,
  minifyJs: true,
  plugins: [
    sass({
      injectGlobalPaths: ['src/css/globals/mixins.scss'],
    }),
  ],
};
