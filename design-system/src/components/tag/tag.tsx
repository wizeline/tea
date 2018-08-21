import { Component, Prop } from '@stencil/core';
import statusMatcher, { NEUTRAL_STATUS } from '../../matchers/status';

@Component({
  tag: 'wz-tag',
  styleUrl: 'tag.scss',
  shadow: false,
})
export class Tag {

  // theming
  @Prop() filled: string;

  // ability
  @Prop() removable: boolean;

  getClass() {
    return statusMatcher({ [this.filled]: this.filled }) || NEUTRAL_STATUS;
  }

  render() {
    const componentClass = this.getClass();

    return (
      <div class={['tag-container', componentClass].join(' ')}>
        <slot />
        {this.removable && <span>×</span>}
      </div>
    );
  }
}
