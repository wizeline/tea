// @flow

import pipe from 'ramda/src/pipe';
import getTruthyKey from './coreUtils';

type sizeProps = {
  xsmall?: boolean,
  small?: boolean,
  medium?: boolean,
  large?: boolean,
  xlarge?: boolean,
};

const pickSizes = ({ xsmall, small, medium, large, xlarge }: sizeProps) => ({
  xsmall,
  small,
  medium,
  large,
  xlarge,
});

const getSize = pipe(pickSizes, getTruthyKey);

const supportSizes = (propParser: Function) => {
  const sizeParser = (iconProps: sizeProps) => {
    const size = getSize(iconProps);
    return { size };
  };
  return (iconProps: sizeProps) => ({
    ...propParser(iconProps),
    ...sizeParser(iconProps),
  });
};

export default supportSizes;
