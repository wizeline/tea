import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'wz-button-link',
  styleUrl: 'buttonlink.scss',
  shadow: false,
})
export class ButtonLink {
  @Element() button: HTMLButtonElement;

  // State props
  @Prop() disabled: boolean;

  render() {

    return (
      <button
        disabled={this.disabled}
        >
        <slot />
      </button>
    );
  }
}
