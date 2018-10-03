import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wz-textarea',
  styleUrl: 'textarea.scss',
  shadow: false,
})
export class TextArea {
  @Prop({ mutable: true })
  value: string;
  @Prop()
  name: string;
  @Prop()
  placeholder: string;
  @Prop()
  error: string;

  render() {
    const DEFAULT_ROWS = 3;

    return (
      <wz-form-error error={this.error}>
        <textarea
          name={this.name}
          placeholder={this.placeholder}
          rows={DEFAULT_ROWS}
          value={this.value}
        />
      </wz-form-error>
    );
  }
}
