// @flow

const COMPONENTS_PATH = './src';

const componentGroups = {
  'icons/Icon': 'Icon',
  'icons/SVGIcon': 'SVGIcon',
  'icons/CircleIcon': 'CircleIcon',
  Link: 'Link',
  Error: 'Error',
  Text: 'Text',
  Form: 'Form',
};

const componentSections = Object.entries(componentGroups).map(
  ([folder, sectionName]) => ({
    name: sectionName,
    content: `${COMPONENTS_PATH}/${folder}/Readme.md`,
    components: `${COMPONENTS_PATH}/${folder}/*/index.js`,
    ignore: `${COMPONENTS_PATH}/${folder}/*/index.js`,
  }),
);

const styleGuideColors = {
  themeColorLink: '#5f65aa',
  themeColorLinkHover: '#5f65aa',
  previewBackground: '#fafbfc',
};

const path = require('path');

module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, './styleguide/TestWrapper'),
  },
  theme: {
    color: {
      link: styleGuideColors.themeColorLink,
      linkHover: styleGuideColors.themeColorLinkHover,
    },
    font: ['ProximaNova Regular', 'sans-serif'],
  },
  styles: {
    Playground: {
      preview: {
        backgroundColor: styleGuideColors.previewBackground,
        paddingLeft: '74px',
        paddingRight: 0,
        borderWidth: [[0, 0, 1, 0]],
        borderRadius: 0,
        fontFamily: ['ProximaNova Regular', 'sans-serif'],
      },
    },
    Markdown: {
      pre: {
        border: 0,
        background: 'none',
        fontFamily: ['ProximaNova Regular', 'sans-serif'],
      },
      code: {
        fontSize: 14,
      },
    },
  },
  require: [
    path.resolve(__dirname, 'styleguide/setup.js'),
    path.resolve(__dirname, 'styleguide/styles.css'),
  ],
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
        {
          test: /\.(ttf|eot|woff|woff2)(#[a-zA-Z]+)?$/,
          loader: 'file-loader',
        },
      ],
    },
  },
};
