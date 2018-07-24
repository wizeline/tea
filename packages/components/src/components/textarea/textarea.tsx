import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wz-textarea',
  styleUrl: 'textarea.scss',
  shadow: false,
})
export class TextArea {

  @Prop({ mutable: true }) value: string;

  render() {
    const DEFAULT_ROWS = 3;

    return (
      <div class="textarea-container">
        <textarea rows={DEFAULT_ROWS} value={this.value} />
      </div>
    );
  }
}
