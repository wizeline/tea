// @flow

import { css } from 'styled-components';
import type { ButtonProps } from './ButtonTypes';

const circleSizeSuport = (small, big) => {
  const baseCSS = css`
    border-radius: 50%;
    box-shadow: unset;
    min-height: unset;
    min-width: unset;
    padding: 0;

    & > .svgContainer {
      align-items: center;
      justify-content: center;
    }
  `;
  if (small) {
    return css`
      ${baseCSS};
      height: 0.75rem;
      width: 0.75rem;

      & > .svgContainer {
        height: 0.375rem;
        width: 0.375rem;
      }
    `;
  } else if (big) {
    return css`
      ${baseCSS};
      height: 2.25rem;
      width: 2.25rem;

      & > .svgContainer {
        height: 1rem;
        width: 1rem;
      }
    `;
  }
  return css`
    ${baseCSS};
    height: 1.25rem;
    width: 1.25rem;

    & > .svgContainer {
      height: 0.5rem;
      width: 0.5rem;
    }
  `;
};

const buttonSizeSupport = ({ small, big, circle }: ButtonProps) => {
  const circleStyles = circle ? circleSizeSuport(small, big) : null;
  if (small) {
    return css`
      border-radius: 0.1875rem;
      box-shadow: 0 0.125rem 0.0625rem 0 rgba(0, 0, 0, 0.03);
      font-size: 0.75rem;
      min-height: 1.4rem;
      min-width: 4.5rem;
      padding: 0 1rem;
      ${circleStyles};
    `;
  }
  if (big) {
    return css`
      border-radius: 0.3125rem;
      box-shadow: 0 0.125rem 0.0625rem 0 rgba(0, 0, 0, 0.03),
        inset 0 -0.1875rem 0 0 rgba(0, 0, 0, 0.08);
      font-size: 1rem;
      min-height: 3rem;
      min-width: 10.25rem;
      padding: 0 1.5rem;
      ${circleStyles};
    `;
  }
  return css`
    border-radius: 0.1875rem;
    box-shadow: 0 0.125rem 0.0625rem 0 rgba(0, 0, 0, 0.03);
    font-size: 0.875rem;
    min-height: 2rem;
    min-width: 6.25rem;
    padding: 0 1rem;
    ${circleStyles};
  `;
};

const iconButtonSupport = ({ circle, icon, children }: ButtonProps) => {
  if (!circle && icon && !children[1]) {
    return css`
      min-width: 3rem;
    `;
  }
  if (!circle && icon && children[1]) {
    return css`
      & > .svgContainer {
        height: 1rem;
        margin-right: 0.5rem;
        width: 1rem;
      }
    `;
  }
  return null;
};

export { buttonSizeSupport, iconButtonSupport };
