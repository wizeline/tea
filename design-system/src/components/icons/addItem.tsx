import { Component } from '@stencil/core';

@Component({
  tag: 'icon-add-item',
  shadow: false,
})
export class IconAddItem {
  render() {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"/>
      </svg>
    );
  }
}
