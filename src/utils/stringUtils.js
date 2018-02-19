// @flow

const lispToCamelCase = (word: string) =>
  word
    .split('-')
    .reduce(
      (result, token) =>
        result + token.replace(/^\w/, chr => chr.toUpperCase()),
    );

const camelToLispCase = (word: string) =>
  word.replace(/([A-Z])/g, '-($1).toLowerCase()');

export { lispToCamelCase, camelToLispCase };
