import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wz-input',
  styleUrl: 'input.scss',
  shadow: false,
})
export class Input {
  @Prop({ mutable: true })
  value: string;
  @Prop()
  name: string;
  @Prop()
  type: string = 'text';
  @Prop()
  disabled: boolean = false;
  @Prop()
  placeholder: string;
  @Prop()
  error: string;
  @Prop()
  class: string;
  @Prop()
  invalid: boolean;

  render() {
    if (this.type === 'file') {
      return <wz-input-file {...this} />;
    }

    const errorClass = this.error ? 'error' : '';
    const classes = [this.class, 'input-container'].join(' ');

    return (
      <div class={errorClass}>
        <div class={classes}>
          <input
            placeholder={this.placeholder}
            disabled={this.disabled}
            name={this.name}
            value={this.value}
            type={this.type}
          />
        </div>
        <wz-error>{this.invalid && this.error}</wz-error>
      </div>
    );
  }
}
