import { Component, h } from '@stencil/core';

@Component({
  tag: 'icon-download',
  shadow: false,
})
export class IconDownload {
  render() {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    );
  }
}
