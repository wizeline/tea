// @flow

const multipleTruthyKeyError =
  'ERROR: Multiple keys associated with a truthy value, offending keys:';

const supportedPropNames = ['size', 'name', 'color', 'background'];
const supportedCssProps = ['background', 'fill', 'height', 'top', 'width'];

export { multipleTruthyKeyError, supportedCssProps, supportedPropNames };
