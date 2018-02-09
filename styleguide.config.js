// @flow

const COMPONENTS_PATH = './src';

const componentGroups = {
  'icons/Icon': 'Icon',
  'icons/SVGIcon': 'SVGIcon',
  'icons/CircleIcon': 'CircleIcon',
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
  themeColorLink: 'firebrick',
  themeColorLinkHover: 'salmon',
  previewBackground: '#a2abaf',
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
    font: ['proxima-nova', 'sans-serif'],
  },
  styles: {
    Playground: {
      preview: {
        backgroundColor: styleGuideColors.previewBackground,
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
