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

  render() {
    const commonProps = {
      disabled: this.disabled,
      name: this.name,
      placeholder: this.placeholder,
    };

    const classes = [this.class, 'input-container'].join(' ');

    return (
      <wz-form-error error={this.error}>
        <div class={classes}>
          <input value={this.value} type={this.type} {...commonProps} />
        </div>
      </wz-form-error>
    );
  }
}
