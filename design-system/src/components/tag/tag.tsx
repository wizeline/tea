import { Component, Prop } from '@stencil/core';
import statusMatcher, { NEUTRAL_STATUS } from '../../matchers/status';

@Component({
  tag: 'wz-tag',
  styleUrl: 'tag.scss',
  shadow: false,
})
export class Tag {
  // theming
  @Prop()
  filled: string;

  // ability
  @Prop()
  removable: boolean;

  @Prop()
  icon: string;

  getClass() {
    return statusMatcher({ [this.filled]: this.filled }) || NEUTRAL_STATUS;
  }

  render() {
    const componentClass = this.getClass();

    return (
      <div class={['tag-container', componentClass].join(' ')}>
        {this.icon && (
          <div class="tag-icon-container left-container">
            <wz-icon xxsmall color="var(--ink-clear)" icon={this.icon} />
          </div>
        )}
        <div class="tag-inner-container">
          <slot />
          {this.removable && (
            <div class="tag-icon-container right-container">
              <wz-icon xxsmall icon="clear" />
            </div>
          )}
        </div>
      </div>
    );
  }
}
