// @flow

const COMPONENTS_PATH = './src';

const componentGroups = {
  Icon: 'Icon',
};

const componentSections = Object.entries(componentGroups).map(
  ([folder, sectionName]) => ({
    name: sectionName,
    content: `${COMPONENTS_PATH}/${folder}/Readme.md`,
    components: `${COMPONENTS_PATH}/${folder}/*/index.js`,
    ignore: `${COMPONENTS_PATH}/${folder}/*/index.js`,
  }),
);

const path = require('path');

module.exports = {
  theme: {
    color: {
      link: 'firebrick',
      linkHover: 'salmon',
    },
    font: ['proxima-nova', 'sans-serif'],
  },
  styles: {
    Playground: {
      preview: {
        backgroundColor: '#fafbfc',
        paddingLeft: '74px',
        paddingRight: 0,
        borderWidth: [[0, 0, 1, 0]],
        borderRadius: 0,
        fontFamily: ['proxima-nova', 'sans-serif'],
      },
    },
    Markdown: {
      pre: {
        border: 0,
        background: 'none',
        fontFamily: ['proxima-nova', 'sans-serif'],
      },
      code: {
        fontSize: 14,
      },
    },
  },
  require: [path.resolve(__dirname, 'styleguide/setup.js')],
  skipComponentsWithoutExample: true,
  title: 'Phoenix',
  sections: componentSections,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
      ],
    },
  },
};
