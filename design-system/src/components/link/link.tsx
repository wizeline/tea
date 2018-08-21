import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wz-link',
  styleUrl: 'link.scss',
  shadow: false,
})
export class Link {
  @Prop() href: string;
  @Prop() target: string;

  render() {
    return (
      <a
        href={this.href}
        target={this.target}
      >
        <slot />
      </a>
    );
  }
}
