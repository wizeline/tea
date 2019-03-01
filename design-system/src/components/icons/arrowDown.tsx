import { Component } from '@stencil/core';

@Component({
  tag: 'icon-arrow-down',
  shadow: false,
})
export class IconArrowDown {
  render() {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      </svg>
    );
  }
}
