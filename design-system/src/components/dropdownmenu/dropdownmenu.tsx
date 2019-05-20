import { Component, h } from '@stencil/core';

@Component({
  tag: 'wz-dropdown-menu',
  styleUrl: 'dropdownmenu.scss',
  shadow: false,
})
export class DropdownMenu {
  render() {
    return <slot />;
  }
}
