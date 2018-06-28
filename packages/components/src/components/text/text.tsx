import { Component, Prop } from '@stencil/core';
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

  render() {
    const componentClass = [sizeMatcher(this), fontWeightMatcher(this)].join(
      ' ',
    );

    return (
      <span class={componentClass}>
        <slot />
      </span>
    );
  }
}
