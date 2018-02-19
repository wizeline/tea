// @flow

const warn = (warning: string) => {
  /* eslint-disable no-console */
  console.warn(warning);
  /* eslint-enable no-console */
  return null;
};

export default warn;
