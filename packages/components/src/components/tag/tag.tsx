import { Component } from '@stencil/core';

@Component({
  tag: 'wz-tag',
  styleUrl: 'tag.scss',
  shadow: false,
})
export class Tag {
  render() {
    return (
      <div class="tag-container">
        <slot />
      </div>
    );
  }
}
