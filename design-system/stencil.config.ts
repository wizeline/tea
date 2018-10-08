import { sass } from '@stencil/sass';

export const config = {
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
  globalStyle: 'src/css/globals/global.scss',
  minifyCss: true,
  minifyJs: true,
  testing: {
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.(j|t)s?(x)',
      '<rootDir>/src/**/?(*.)(spec|test).(j|t)s?(x)',
    ],
    allowableMismatchedPixels: 200,
    pixelmatchThreshold: 0.1,
    emulate: [
      {
        userAgent: 'Desktop',
        width: 1280,
        height: 800,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
      },
    ],
  },
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
