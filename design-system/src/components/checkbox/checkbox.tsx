import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wz-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: false,
})
export class Checkbox {
  @Prop()
  value: string;
  @Prop()
  name: string;
  @Prop()
  disabled: boolean = false;
  @Prop({ mutable: true })
  checked: boolean = false;

  render() {
    return (
      <div class="checkbox-container">
        <input
          checked={this.checked}
          disabled={this.disabled}
          name={this.name}
          type="checkbox"
          value={this.value}
        />
        <slot />
      </div>
    );
  }
}
