// @flow

const camelToLispCase = (word: string) =>
  word.replace(/([A-Z])/g, captureGroup => `-${captureGroup.toLowerCase()}`);

const lispToCamelCase = (word: string) =>
  word
    .split('-')
    .reduce(
      (result, token) =>
        result + token.replace(/^\w/, chr => chr.toUpperCase()),
    );

export { camelToLispCase, lispToCamelCase };
