import { Component, Prop, Element, h } from '@stencil/core';
import sizeMatcher, { MEDIUM_SIZE } from '../../matchers/size';
import significanceMatcher, {
  SECONDARY_SIGNIFICANCE,
} from '../../matchers/significance';

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

  @Prop() type: 'reset' | 'button' | 'submit';

  getClass() {
    const significance = significanceMatcher(this) || SECONDARY_SIGNIFICANCE;
    const size = sizeMatcher(this) || MEDIUM_SIZE;

    return [significance, size].join(' ');
  }

  render() {
    const componentClass = this.getClass();

    return (
      <button class={componentClass} type={this.type} disabled={this.disabled}>
        <slot />
      </button>
    );
  }
}
