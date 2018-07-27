import { Component, Prop, Element } from '@stencil/core';
import sizeMatcher from '../../matchers/size';
import buttonTypeMatcher from '../../matchers/buttonType';

@Component({
  tag: 'wz-button',
  styleUrl: 'button.scss',
  shadow: false,
})
export class Button {
  @Element() button: HTMLButtonElement;
  // Token props
  @Prop() primary: boolean;
  @Prop() secondary: boolean;
  @Prop() destructive: boolean;

  // Size props
  @Prop() small: boolean;
  @Prop() medium: boolean;
  @Prop() large: boolean;

  // State props
  @Prop() disabled: boolean;

  render() {
    const componentClass = [sizeMatcher(this), buttonTypeMatcher(this)].join(
      ' ',
    );

    return (
      <button
        class={componentClass}
        disabled={this.disabled}
        >
        <slot />
      </button>
    );
  }
}
