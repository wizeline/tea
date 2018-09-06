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
  // file type props
  @Prop()
  accept: string;

  render() {
    const commonProps = {
      disabled: this.disabled,
      name: this.name,
      placeholder: this.placeholder,
    };

    if (this.type === 'file') {
      return (
        <wz-form-error error={this.error}>
          <wz-input-file accept={this.accept} {...commonProps} />
        </wz-form-error>
      );
    }

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
