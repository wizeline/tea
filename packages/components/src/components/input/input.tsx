import { Component, Prop, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'wz-input',
  styleUrl: 'input.scss',
  shadow: false,
})
export class Input {

  @Prop({ mutable: true }) value: string;

  @Event() changed: EventEmitter<string>;

  handleChange(ev) { 
    this.value = ev.target ? ev.target.value : null;
    this.changed.emit(this.value);
  }

  render() {    
    return (
      <div class="input-container">
        <input value={this.value} onInput={this.handleChange} />
      </div>
    );
  }
}
