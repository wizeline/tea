import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wz-toggle',
  styleUrl: 'toggle.scss',
  shadow: false,
})
export class Toggle {
  @Prop()
  id: string = 'wz-toggle';
  @Prop()
  checked: boolean = false;
  @Prop()
  disabled: boolean = false;

  render() {
    return (
      <div class="checkbox">
        <input
          checked={this.checked}
          disabled={this.disabled}
          id={this.id}
          type="checkbox"
        />
        <label htmlFor={this.id} />
      </div>
    );
  }
}
