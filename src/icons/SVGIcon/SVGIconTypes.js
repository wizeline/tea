// @flow

export type SVGFillProps = {
  [fill: string]: string,
};

export type SVGIconProps = {
  name: string,
  size: string,
  color?: string,
  top?: number,
};

export type ContainerSizeProps = {
  size: number,
};

export type ContainerTopProps = {
  [top: string]: number,
};
