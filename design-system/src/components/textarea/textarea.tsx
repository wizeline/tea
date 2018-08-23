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
  placeholder: string;

  render() {
    const DEFAULT_ROWS = 3;

    return (
      <textarea
        placeholder={this.placeholder}
        rows={DEFAULT_ROWS}
        value={this.value}
      />
    );
  }
}
