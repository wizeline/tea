import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wz-input',
  styleUrl: 'input.scss',
  shadow: false,
})
export class Input {
  @Prop({ mutable: true })
  value: string;

  render() {
    return (
      <div class="input-container">
        <input value={this.value} />
      </div>
    );
  }
}
