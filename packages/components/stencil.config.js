const sass = require('@stencil/sass');

exports.config = {
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

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
};
