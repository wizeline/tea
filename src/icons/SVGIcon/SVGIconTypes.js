// @flow

export type SVGFillProps = {
  [fill: string]: string,
};

export type SVGIconProps = {
  name?: string,
  size?: string,
  color?: string,
  top?: number,
  svgData?: React.Node,
};

export type ContainerSizeProps = {
  size: number,
};

export type ContainerTopProps = {
  top: number,
};
