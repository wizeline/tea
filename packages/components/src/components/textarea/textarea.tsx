import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wz-textarea',
  styleUrl: 'textarea.scss',
  shadow: false,
})
export class TextArea {

  @Prop({ mutable: true }) value: string;

  @Event() changed: EventEmitter<string>;

  handleChange(ev) {
    this.value = ev.target.value;
    this.changed.emit(this.value);
  }

  render() {    
    const DEFAULT_ROWS = 3;

    return (
      <div class="textarea-container">
        <textarea rows={DEFAULT_ROWS} value={this.value} onInput={this.handleChange} />
      </div>
    );
  }
}
