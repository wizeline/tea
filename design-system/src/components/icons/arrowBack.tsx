import { Component } from '@stencil/core';

@Component({
  tag: 'icon-arrow-back',
  shadow: false,
})
export class IconArrowBack {
  render() {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
    );
  }
}
