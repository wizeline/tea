import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wz-dropdown-menu-item',
  styleUrl: 'dropdownmenuitem.scss',
  shadow: false,
})
export class DropdownMenuItem {
  @Prop()
  selected: boolean = false;
  @Prop()
  value: string;

  render() {
    const baseClass = 'dropdown-menu-item-container';
    const selectedClass = this.selected ? 'selected' : '';
    const dropdownMenuItemClass = [baseClass, selectedClass].join(' ');
    return (
      <div class={dropdownMenuItemClass} data-value={this.value}>
        <wz-text>
          <slot />
        </wz-text>
      </div>
    );
  }
}
