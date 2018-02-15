// @flow

export type SVGFillProps = {
  iconFillColor: string,
  theme: {
    textPrimaryInvert: string,
  },
};

export type SVGIconProps = {
  name: string,
  size?: string,
  color?: string,
  top?: number,
};

export type ContainerSizeProps = {
  size: number,
};

export type ContainerTopProps = {
  top: number,
};
