import { Component } from '@stencil/core';

@Component({
  tag: 'icon-plus',
  shadow: false,
})
export class IconPlus {
  render() {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    );
  }
}
