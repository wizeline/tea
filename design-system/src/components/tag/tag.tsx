import { Component, Prop, Element, h } from '@stencil/core';

@Component({
  tag: 'wz-tag',
  styleUrl: 'tag.scss',
  shadow: false,
})
export class Tag {
  @Prop()
  color: string;

  // ability
  @Prop()
  removable: boolean;

  @Prop()
  icon: string;

  @Element()
  el: HTMLElement;

  render() {
    this.el.style.setProperty('--tag-fill', this.color);
    const isFilledClass = Boolean(this.color) ? 'filled' : 'outline';
    return (
      <div class={['tag-container', isFilledClass].join(' ')}>
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
