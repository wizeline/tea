// @flow

import plus from './plus';

const lispToPascalCase = (word: string) =>
  word
    .split('-')
    .reduce(
      (result, token) =>
        result + token.replace(/^\w/, chr => chr.toUpperCase()),
    );

const data = {
  plus,
};

const getSVG = (name: string) => data[lispToPascalCase(name)];

export default getSVG;
