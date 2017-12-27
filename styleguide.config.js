
const COMPONENTS_PATH = './src';

const componentGroups = {
  icons: 'Icons',
};

const componentSections = Object
  .entries(componentGroups)
  .map(([folder, sectionName]) => {
    return {
      name: sectionName,
      content: `${COMPONENTS_PATH}/${folder}/Readme.md`,
      components: `${COMPONENTS_PATH}/${folder}/*/index.js`,
      ignore: `${COMPONENTS_PATH}/${folder}/*/index.js`,
    };
  });

const path = require('path');
module.exports = {
  require: [path.resolve(__dirname, 'styleguide/setup.js')],
  skipComponentsWithoutExample: true,
  title: 'Phoenix',
  sections: [
    {
      name: 'Components',
      sections: componentSections,
    },
  ],
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
