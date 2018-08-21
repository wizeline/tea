import { Component, Prop } from '@stencil/core';
import { CLASS_DEFAULT } from '../../constants';
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
    const componentClass = sizeMatcher(this) || CLASS_DEFAULT;

    return <span class={componentClass}>
        <slot />
      </span>;
  }
}
