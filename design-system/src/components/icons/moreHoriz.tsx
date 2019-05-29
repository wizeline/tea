import { Component, h } from '@stencil/core';

@Component({
  tag: 'icon-more-horiz',
  shadow: false,
})
export class IconMoreHoriz {
  render() {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    );
  }
}
