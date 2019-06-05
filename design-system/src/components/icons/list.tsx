import { Component } from '@stencil/core';

@Component({
  tag: 'icon-list',
  shadow: false,
})
export class IconList {
  render() {
    return (
      <svg viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M4.656 4.656H14V6H4.656V4.656zm0 6.688V10H14v1.344H4.656zm0-2.688V7.344H14v1.312H4.656zM2 6V4.656h1.344V6H2zm0 5.344V10h1.344v1.344H2zm0-2.688V7.344h1.344v1.312H2z"
        />
      </svg>
    );
  }
}
