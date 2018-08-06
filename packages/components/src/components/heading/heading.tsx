import { Component, Prop } from '@stencil/core';
import sizeMatcher from '../../matchers/size';

@Component({
  tag: 'wz-heading',
  styleUrl: 'heading.scss',
  shadow: false,
})
export class Heading {
  @Prop() small: boolean;
  @Prop() medium: boolean;
  @Prop() large: boolean;
  @Prop() xlarge: boolean;

  render() {
    return (
      <span class={sizeMatcher(this)}>
        <slot />
      </span>
    );
  }
}
