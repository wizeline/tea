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
  @Prop() primary: boolean;
  @Prop() secondary: boolean;
  @Prop() destructive: boolean;
  @Prop() small: boolean;
  @Prop() medium: boolean;
  @Prop() large: boolean;

  render() {
    const componentClass = [sizeMatcher(this), buttonTypeMatcher(this)].join(
      ' ',
    );

    return (
      <button class={componentClass}>
        <slot />
      </button>
    );
  }
}
