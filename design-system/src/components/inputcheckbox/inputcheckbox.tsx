import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wz-input-checkbox',
  styleUrl: 'inputcheckbox.scss',
  shadow: false,
})
export class InputCheckbox {
  @Prop({ mutable: true })
  value: string;
  @Prop()
  name: string;
  @Prop()
  disabled: boolean = false;
  @Prop({ mutable: true })
  checked: boolean = false;

  render() {
    return (
      <div>
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
