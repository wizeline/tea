import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wz-text',
  styleUrl: 'text.scss',
})

export class Text {
  @Prop() h200: boolean;
  @Prop() h300: boolean;
  @Prop() h400: string;
  @Prop() h500: boolean;
  @Prop() h600: boolean;
  @Prop() h700: boolean;

  getTypography() {
    if (this.h300) { return 'h300'; }
    if (this.h400) { return 'h400'; }
    if (this.h500) { return 'h500'; }
    if (this.h600) { return 'h600'; }

    return 'h200';
  }

  render() {
    const typographyClass = this.getTypography();

    return (
      <div class={typographyClass}>
        <slot></slot>
      </div>
    );
  }
}
