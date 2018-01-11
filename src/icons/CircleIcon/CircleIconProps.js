// @flow

export type Props = {
  name: string,
  color?: string,
  size?: string,
  background?: string,
};

export default {
  defaultProps: {
    color: undefined,
    size: undefined,
    background: '#000000',
  },
};
