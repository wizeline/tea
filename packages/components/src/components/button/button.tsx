import { Component, Prop, Element } from '@stencil/core';
import { TinyColor } from '@ctrl/tinycolor';
import sizeMatcher from '../../matchers/size';
import buttonTypeMatcher from '../../matchers/buttonType';

@Component({
  tag: 'wz-button',
  styleUrl: 'button.scss',
  shadow: false,
})
export class Button {
  @Element() button: HTMLButtonElement;
  @Prop() primary: boolean;
  @Prop() secondary: boolean;
  @Prop() destructive: boolean;
  @Prop() small: boolean;
  @Prop() medium: boolean;
  @Prop() large: boolean;

  componentDidLoad() {
    const innerButton = this.button.querySelector('button');
    const backgroundColor = getComputedStyle(innerButton).getPropertyValue(
      'background-color',
    );

    const hoverColor = (() => {
      if (this.primary || this.destructive) {
        return new TinyColor(backgroundColor).darken(20).toHexString();
      }
      return '';
    })();

    this.button.style.setProperty(
      '--button-hover-background-color',
      hoverColor,
    );
  }

  render() {
    const componentClass = [sizeMatcher(this), buttonTypeMatcher(this)].join(
      ' ',
    );

    return (
      <button class={componentClass}>
        <slot />
      </button>
    );
  }
}
