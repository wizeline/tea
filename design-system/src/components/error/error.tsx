import { Component, h } from '@stencil/core';

@Component({
  tag: 'wz-error',
  styleUrl: 'error.scss',
  shadow: false,
})
export class Error {
  render() {
    return (
      <wz-text small>
        <slot />
      </wz-text>
    );
  }
}
