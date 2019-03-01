import { Component } from '@stencil/core';

@Component({
  tag: 'icon-send',
  shadow: false,
})
export class IconSend {
  render() {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    );
  }
}
