import { Component } from '@stencil/core';

@Component({
  tag: 'wz-select',
  styleUrl: 'select.scss',
  shadow: false,
})
export class Select {
  render() {
    return (
      <select>
        <slot />
      </select>
    );
  }
}
