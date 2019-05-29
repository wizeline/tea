import { Component, h } from '@stencil/core';

@Component({
  tag: 'icon-flag',
  shadow: false,
})
export class IconFlag {
  render() {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
      </svg>
    );
  }
}
