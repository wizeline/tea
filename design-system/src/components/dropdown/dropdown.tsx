import { Component, Element, Prop, State } from '@stencil/core';
import Popper, { Placement } from 'popper.js';

@Component({
  tag: 'wz-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: false,
})
export class Dropdown {
  @Element()
  dropdown: HTMLElement;
  @State()
  isOpen: boolean = false;
  @Prop()
  placement: Placement = 'bottom-start';

  dropdownTrigger: Element;
  dropdownMenu: HTMLElement;
  popper: Popper;

  componentDidLoad() {
    this.dropdownMenu = this.dropdown.querySelector('wz-dropdown-menu');
    // get the first element from the slot
    this.dropdownTrigger = this.dropdown.firstElementChild;
    this.dropdownMenu.style.display = 'none';
    this.dropdownTrigger.addEventListener('click', () => {
      this.toggleOpenDropdown();
    });
    this.closeOnClick();
    this.popper = new Popper(this.dropdownTrigger, this.dropdownMenu, {
      placement: this.placement,
    });
  }

  componentDidUpdate() {
    this.popper.update();
  }

  componentDidUnload() {
    this.popper.destroy();
  }

  closeOnClick = () => {
    document.addEventListener('click', (event: any) => {
      if (this.dropdownTrigger.contains(event.target)) {
        return;
      }
      this.toggleOpenDropdown(true);
    });
  };

  toggleOpenDropdown = (isOpen = this.isOpen) => {
    this.isOpen = !isOpen;
    this.dropdownMenu.style.display = this.isOpen ? 'block' : 'none';
  };

  render() {
    return <slot />;
  }
}
