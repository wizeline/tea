// @flow

import { css } from 'styled-components';
import type { ButtonProps } from './ButtonTypes';

const roundSizeSuport = (small, big) => {
  let size = 1.25;
  let svgSize = 0.5;
  if (small) {
    size = 0.75;
    svgSize = 0.375;
  } else if (big) {
    size = 2.25;
    svgSize = 1;
  }
  return css`
    border-radius: 50%;
    box-shadow: unset;
    height: ${size}rem;
    min-height: unset;
    min-width: unset;
    padding: 0;
    width: ${size}rem;

    .svgContainer {
      align-items: center;
      height: ${svgSize}rem;
      justify-content: center;
      width: ${svgSize}rem;
    }
  `;
};

const buttonSizeSupport = ({ small, big, round }: ButtonProps) => {
  let borderRadius = 0.1875;
  let boxShadow = '0 0.125rem 0.0625rem 0 rgba(0, 0, 0, 0.03)';
  let fontSize = 0.875;
  let height = 2;
  let padding = 1;
  let width = 6.25;
  if (small) {
    fontSize = 0.75;
    height = 1.4;
    width = 4.5;
  } else if (big) {
    borderRadius = 0.3125;
    boxShadow += ', inset 0 -0.1875rem 0 0 rgba(0, 0, 0, 0.08)';
    fontSize = 1;
    height = 3;
    padding = 1.5;
    width = 10.25;
  }
  return css`
    border-radius: ${borderRadius}rem;
    box-shadow: ${boxShadow};
    font-size: ${fontSize}rem;
    min-height: ${height}rem;
    min-width: ${width}rem;
    padding: 0 ${padding}rem;
    ${round ? roundSizeSuport(small, big) : null};
  `;
};

const iconButtonSupport = ({ round, icon, children }: ButtonProps) => {
  if (!round && icon && !children[1]) {
    return css`
      min-width: 48px;
    `;
  }
  if (!round && icon && children[1]) {
    return css`
      .svgContainer {
        height: 16px;
        margin-right: 8px;
        width: 16px;
      }
    `;
  }
  return null;
};

export { buttonSizeSupport, iconButtonSupport };
