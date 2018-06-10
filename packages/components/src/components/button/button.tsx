import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wl-button',
  styleUrl: 'button.scss',
  shadow: false,
})
export class Button {
  @Prop() primary: boolean;
  @Prop() destructive: boolean;

  render() {
    const buttonClass = (() => {
      if (this.primary) {
        return 'primary';
      }

      if (this.destructive) {
        return 'destructive';
      }

      return 'secondary';
    })();

    return (
      <button class={buttonClass}>
        <slot />
      </button>
    );
  }
}
