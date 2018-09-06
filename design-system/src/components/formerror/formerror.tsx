import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wz-form-error',
  styleUrl: 'formerror.scss',
  shadow: false,
})
export class FormError {
  @Prop()
  error: string;

  render() {
    const errorClass = this.error ? 'error' : '';

    return (
      <div class={errorClass}>
        <slot />
        <wz-error>{Boolean(this.error) && this.error}</wz-error>
      </div>
    );
  }
}
