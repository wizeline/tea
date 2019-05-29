import { Component, Prop, Element, h } from '@stencil/core';
import sizeMatcher, { MEDIUM_SIZE } from '../../matchers/size';
import IconSet from '../icons';

@Component({
  tag: 'wz-icon',
  styleUrl: 'icon.scss',
  shadow: false,
})
export class Icon {
  // Size props
  @Prop()
  xxsmall: boolean;
  @Prop()
  xsmall: boolean;
  @Prop()
  small: boolean;
  @Prop()
  medium: boolean;
  @Prop()
  large: boolean;
  @Prop()
  xlarge: boolean;
  @Prop()
  color: string;
  @Prop()
  icon: string;

  @Element()
  el: HTMLElement;
  render() {
    const SelectedIcon = IconSet(this);
    const size = sizeMatcher(this) || MEDIUM_SIZE;

    this.el.style.setProperty('--icon-fill', this.color);

    const className = ['icon-container', size].join(' ');

    return <div class={className}>{SelectedIcon}</div>;
  }
}
