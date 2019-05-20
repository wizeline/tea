import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'wz-radio',
  styleUrl: 'radio.scss',
  shadow: false,
})
export class Radio {
  @Prop()
  name: string;
  @Prop()
  disabled: boolean = false;
  @Prop()
  checked: boolean = false;

  render() {
    return (
      <label class="radio-container">
        <slot />
        <input
          checked={this.checked}
          disabled={this.disabled}
          name={this.name}
          type="radio"
        />
        <span class="checkmark" />
      </label>
    );
  }
}
