const sass = require('@stencil/sass');

exports.config = {
  namespace: 'stencil-components-spike',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
      serviceWorker: false,
    },
  ],
  plugins: [sass()],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
};
