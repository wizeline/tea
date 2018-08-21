import { Component, Prop } from '@stencil/core';
import { CLASS_DEFAULT } from '../../constants';
import sizeMatcher from '../../matchers/size';
import fontWeightMatcher from '../../matchers/fontWeight';

@Component({
  tag: 'wz-text',
  styleUrl: 'text.scss',
  shadow: false,
})
export class Text {
  @Prop() small: boolean;
  @Prop() base: boolean;
  @Prop() semibold: boolean;
  @Prop() bold: boolean;

  getClass() {
    const fontWeight = fontWeightMatcher(this);
    const size = sizeMatcher(this) || CLASS_DEFAULT;

    return [fontWeight, size].join(' ');
  }
  render() {
    const componentClass = this.getClass();

    return (
      <span class={componentClass}>
        <slot />
      </span>
    );
  }
}
