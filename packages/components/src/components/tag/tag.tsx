import { Component, Prop } from '@stencil/core';
import tagTypeMatcher from '../../matchers/tagType';

@Component({
  tag: 'wz-tag',
  styleUrl: 'tag.scss',
  shadow: false,
})
export class Tag {
  // tag types
  @Prop() primary: boolean;
  @Prop() info: boolean;
  @Prop() warning: boolean;
  @Prop() negative: boolean;
  @Prop() positive: boolean;

  // tag states
  @Prop() removable: boolean;

  render() {
    const componentClass = [tagTypeMatcher(this)].join(' ');

    return (
      <div class={['tag-container', componentClass].join(' ')}>
        <slot />
        { this.removable && <span>×</span> }
      </div>
    );
  }
}
