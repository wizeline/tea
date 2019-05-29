import { Component, h } from '@stencil/core';

@Component({
  tag: 'icon-duplicate',
  shadow: false,
})
export class IconDuplicate {
  render() {
    return (
      <svg viewBox="0 0 24 24">
        <path
          fill="#000000"
          d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
        />
      </svg>
    );
  }
}
