// @flow

export type Props = {
  name: string,
  color?: string,
  size?: string,
  inverse?: boolean,
  top?: number,
};

export default {
  defaultProps: {
    size: undefined,
    color: undefined,
    inverse: false,
    top: 0,
  },
};
