import { Component, Prop } from '@stencil/core';
import statusMatcher from '../../matchers/status';
import buttonType from '../../matchers/buttonType';

@Component({
  tag: 'wz-tag',
  styleUrl: 'tag.scss',
  shadow: false,
})
export class Tag {
  // hierarchical
  @Prop() primary: boolean;

  // status
  @Prop() info: boolean;
  @Prop() warning: boolean;
  @Prop() negative: boolean;
  @Prop() positive: boolean;

  // ability
  @Prop() removable: boolean;

  render() {
    const componentClass = [statusMatcher(this), buttonType(this)].join(' ');

    return (
      <div class={['tag-container', componentClass].join(' ')}>
        <slot />
        {this.removable && <span>×</span>}
      </div>
    );
  }
}
