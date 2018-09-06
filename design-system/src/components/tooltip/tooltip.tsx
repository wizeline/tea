import { Component, Prop, Element } from '@stencil/core';
import TooltipJS from 'tooltip.js';

@Component({
  tag: 'wz-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: false,
})
export class Tooltip {
  @Element()
  tooltip: HTMLElement;
  @Prop()
  content: string | HTMLElement;
  tooltipInstance: TooltipJS;

  componentWillLoad() {
    this.tooltipInstance = new TooltipJS(this.tooltip, {
      trigger: 'click',
      title: this.content,
      html: true,
    });
  }

  componentDidUnload() {
    this.tooltipInstance && this.tooltipInstance.dispose();
  }

  render() {
    return (
      <div class="inner-tooltip">
        <slot />
      </div>
    );
  }
}
