import { Component } from '@stencil/core';

@Component({
  tag: 'wl-text',
  styleUrl: 'text.scss',
  shadow: false,
})
export class Text {
  render() {
    return (
      <span>
        <slot />
      </span>
    );
  }
}
